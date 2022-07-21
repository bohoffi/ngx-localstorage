import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { LocalStorageService } from '../services/ngx-localstorage.service';
import { getProperty, setProperty } from '../utils/property-utils';

/**
 * Provide a directive to directly interact with stored values.
 */
@Directive({
  selector: '[ngxLocalStorage]'
})
export class LocalStorageDirective implements AfterViewInit, OnDestroy {

  /**
   * The key to use with localstorage.
   */
  @Input('ngxLocalStorage')
  public key: string;
  /**
   * The keys prefix to use.
   */
  @Input()
  public prefix: string;
  /**
   * The event to hook onto value changes.
   */
  @Input()
  public forEvent: string;
  /**
   * An optional debounce for storage write access after value changes.
   */
  @Input()
  public storageDebounce = 0;
  /**
   * Flag if the bound elements value should be initialized from storage.
   */
  @Input()
  public set initFromStorage(value: BooleanInput) {
    this._initFromStorage = coerceBooleanProperty(value);
  }

  /**
   * An optional transformer to handle falsy values.
   */
  @Input()
  public falsyTransformer?: () => any;

  /**
   * Provides a path to access the bound elements value property.
   */
  @Input()
  public set valuePath(path: any[] | string) {
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
  public lsStoredValue = new EventEmitter<any>();

  private _eventSubscription: Subscription;
  private _valuePath: string[] = [];

  private _initFromStorage = false;

  /**
   * Creates a new instance.
   */
  constructor(private readonly er: ElementRef,
    private readonly lss: LocalStorageService) {

    this.lss.pipe(
      // TODO: filter should be more accurate
      filter((ev: StorageEvent) => ev.key && ev.key.indexOf(this.key) >= 0)
    )
      .subscribe((ev: StorageEvent) => {
        setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this.er.nativeElement, this.falsyTransformer);
      });
  }

  /**
   * AfterViewInit lifecycle hook.
   */
  public ngAfterViewInit(): void {
    this.initKey();
    this.checkInitFromStorage();
    this.hookToEvent();
  }

  /**
   * Initalizes the from either the given value or the elements id or name property.
   */
  private initKey(): void {
    if (!this.key) {
      if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
        this.lss.error(new Error('No key or element id or name supplied!'));
      }
      this.key = this.er.nativeElement.id || this.er.nativeElement.name;
    }
  }

  /**
   * Hooks onto the elements given event to perform storage write on value changes.
   */
  private hookToEvent(): void {
    if (this.forEvent) {
      this._eventSubscription = fromEvent(this.er.nativeElement, this.forEvent).pipe(
        debounceTime(this.storageDebounce))
        .subscribe(() => {
          this.lss.asPromisable().set(this.key,
            getProperty(this._valuePath.length ? this._valuePath : ['value'], this.er.nativeElement),
            this.prefix)
            .then(() => {
              this.lss.asPromisable().get(this.key, this.prefix)
                .then((value: any) => {
                  this.lsStoredValue.emit(value);
                })
                .catch((err: Error) => this.lss.error(err));
            })
            .catch((err: Error) => this.lss.error(err));
        });
    }
  }

  /**
   * Initializes the elements value from storage.
   */
  private checkInitFromStorage(): void {
    if (this._initFromStorage) {
      this.lss.asPromisable().get(this.key, this.prefix)
        .then((storedValue: any) => {
          setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this.er.nativeElement, this.falsyTransformer);
        })
        .catch((err: Error) => this.lss.error(err));
    }
  }

  /**
   * Unsubscribe from event observable.
   */
  public ngOnDestroy(): void {
    if (this._eventSubscription && !this._eventSubscription.closed) {
      this._eventSubscription.unsubscribe();
    }
  }
}
