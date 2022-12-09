import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

import { LocalStorageService } from '../services/ngx-localstorage.service';
import { getPropByPath, setPropByPath } from '../utils/property-utils';

/**
 * Provide a directive to directly interact with stored values.
 */
@Directive({
  selector: '[ngxLocalStorage]',
  standalone: true
})
export class LocalStorageDirective implements AfterViewInit, OnDestroy {

  /**
   * The key to use with localstorage.
   */
  @Input('ngxLocalStorage')
  public key = '';
  /**
   * The keys prefix to use.
   */
  @Input()
  public prefix?: string;
  /**
   * The event to hook onto value changes.
   */
  @Input()
  public forEvent?: string;
  /**
   * An optional debounce for storage write access after value changes.
   */
  @Input()
  public storageDebounce = 0;
  /**
   * Flag if the bound elements value should be initialized from storage.
   */
  @Input()
  public set initFromStorage(value: string | boolean | null | undefined) {
    this._initFromStorage = value != null && `${value}` !== 'false';
  }
  public get initFromStorage(): boolean {
    return this._initFromStorage;
  }

  /**
   * An optional transformer to handle falsy values.
   */
  @Input()
  public falsyTransformer?: () => unknown;

  /**
   * Provides a path to access the bound elements value property.
   */
  @Input()
  public set valuePath(path: string | string[]) {
    if (path != null) {
      this._valuePath = Array.isArray(path) ? path : path.split(',');
    } else {
      this._valuePath = [];
    }
  }

  /**
   * Event which gets fired when a bound value got stored.
   */
  @Output()
  public storedValue = new EventEmitter<unknown>();

  private readonly subscriptions = new Subscription();
  private _valuePath: string[] = [];

  private _initFromStorage = false;

  /**
   * Creates a new instance.
   */
  constructor(
    private readonly elementRef: ElementRef,
    private readonly storageService: LocalStorageService
  ) { }

  /**
   * AfterViewInit lifecycle hook.
   */
  public ngAfterViewInit(): void {
    this.initKey();

    this.subscriptions.add(
      this.storageService
        .pipe(
          // TODO: filter should be more accurate
          filter((ev: StorageEvent) => !!ev.key && ev.key.indexOf(this.key) >= 0)
        )
        .subscribe((ev: StorageEvent) => {
          setPropByPath(
            this.elementRef.nativeElement,
            this.getValuePath(),
            ev.newValue,
            this.falsyTransformer
          );
        })
    );

    this.checkInitFromStorage();
    this.hookToEvent();
  }

  /**
   * Unsubscribe from event observable.
   */
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Initalizes the from either the given value or the elements id or name property.
   */
  private initKey(): void {
    if (!this.key) {
      if (!this.elementRef.nativeElement.id && !this.elementRef.nativeElement.name) {
        this.storageService.error(new Error('No key or element id or name supplied!'));
      }
      this.key = this.elementRef.nativeElement.id || this.elementRef.nativeElement.name;
    }
  }

  /**
   * Hooks onto the elements given event to perform storage write on value changes.
   */
  private hookToEvent(): void {
    if (this.forEvent) {

      this.subscriptions.add(
        fromEvent(this.elementRef.nativeElement, this.forEvent)
          .pipe(
            debounceTime(this.storageDebounce)
          )
          .subscribe(() => {
            const propertyValue = getPropByPath(
              this.elementRef.nativeElement,
              this.getValuePath()
            );

            this.storageService.set(
              this.key,
              propertyValue,
              this.prefix
            );

            this.storedValue.emit(propertyValue);
          })
      );
    }
  }

  /**
   * Initializes the elements value from storage.
   */
  private checkInitFromStorage(): void {
    if (this.initFromStorage) {
      const storedValue = this.storageService.get(this.key, this.prefix)

      try {
        setPropByPath(
          this.elementRef.nativeElement,
          this.getValuePath(),
          storedValue,
          this.falsyTransformer
        );
      } catch (error) {
        this.storageService.error(error);
      }
    }
  }

  private getValuePath(): string[] {
    return this._valuePath.length ? this._valuePath : ['value'];
  }
}
