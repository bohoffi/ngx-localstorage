import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent as observableFromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

import { getProperty, setProperty } from '../utils';
import { LocalStorageService } from '../services/ngx-localstorage.service';
import { StorageEventService } from '../services/storage-event.service';

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
  public lsKey: string;
  /**
   * The keys prefix to use.
   */
  @Input()
  public lsPrefix: string;
  /**
   * The event to hook onto value changes.
   */
  @Input()
  public lsEvent: string;
  /**
   * An optional debounce for storage write access after value changes.
   */
  @Input()
  public lsDebounce = 0;
  /**
   * Flag if the bound elements value should be initialized from storage.
   */
  @Input()
  public lsInitFromStorage = false;
  /**
   * An optional transformer to handle falsy values.
   */
  @Input()
  public lsFalsyTransformer?: () => any;

  /**
   * Provides a path to access the bound elements value property.
   */
  @Input()
  public set lsValuePath(path: any[] | string) {
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

  /**
   * Creates a new instance.
   */
  constructor(private readonly er: ElementRef,
    private readonly lss: LocalStorageService,
    private readonly es: StorageEventService) {

    this.es.stream.pipe(
      // TODO: filter should be more accurate
      filter((ev: StorageEvent) => ev.key && ev.key.indexOf(this.lsKey) >= 0)
    )
      .subscribe((ev: StorageEvent) => {
        setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this.er.nativeElement, this.lsFalsyTransformer);
      });
  }

  /**
   * AfterViewInit lifecycle hook.
   */
  public ngAfterViewInit(): void {
    this._initKey();
    this._initFromStorage();
    this._hookEvent();
  }

  /**
   * Initalizes the from either the given value or the elements id or name property.
   */
  private _initKey(): void {
    if (!this.lsKey) {
      if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
        throw new Error('No key or element id or name supplied!');
      }
      this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
    }
  }

  /**
   * Hooks onto the elements given event to perform storage write on value changes.
   */
  private _hookEvent(): void {
    if (this.lsEvent) {
      this._eventSubscription = observableFromEvent(this.er.nativeElement, this.lsEvent).pipe(
        debounceTime(this.lsDebounce))
        .subscribe(() => {
          this.lss.asPromisable().set(this.lsKey,
            getProperty(this._valuePath.length ? this._valuePath : ['value'], this.er.nativeElement),
            this.lsPrefix)
            .then(() => {
              this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                .then((value: any) => {
                  this.lsStoredValue.emit(value);
                })
                .catch((err: Error) => console.error(err));
            })
            .catch((err: Error) => console.error(err));
        });
    }
  }

  /**
   * Initializes the elements value from storage.
   */
  private _initFromStorage(): void {
    if (this.lsInitFromStorage) {
      this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
        .then((storedValue: any) => {
          setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this.er.nativeElement, this.lsFalsyTransformer);
        })
        .catch((err: Error) => console.error(err));
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
