/**
 * Created by bohoffi on 03.04.2017.
 */
import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import {getProperty, setProperty} from '../utils';
import {LocalStorageService, StorageEventService} from '../services';

@Directive({
  selector: '[ngxLocalStorage]'
})
export class LocalStorageDirective implements AfterViewInit, OnDestroy {

  @Input('ngxLocalStorage')
  lsKey: string;
  @Input()
  lsPrefix: string;
  @Input()
  lsEvent: string;
  @Input()
  lsDebounce = 0;
  @Input()
  lsInitFromStorage = false;
  @Input()
  lsFalsyTransformer?: () => any;

  @Output()
  lsStoredValue = new EventEmitter<any>();

  private _eventSubscription: Subscription;
  private _valuePath: string[] = [];

  constructor(private er: ElementRef,
              private lss: LocalStorageService,
              private es: StorageEventService) {

    this.es.stream
    // TODO: filter should be more accurate
      .filter((ev: StorageEvent) => ev.key.indexOf(this.lsKey) >= 0)
      .subscribe((ev: StorageEvent) => {
        setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this.er.nativeElement, this.lsFalsyTransformer);
      });
  }

  ngAfterViewInit(): void {
    this._initKey();
    this._initFromStorage();
    this._hookEvent();
  }

  @Input()
  set lsValuePath(path: any[] | string) {
    if (path != null) {
      this._valuePath = Array.isArray(path) ? path : path.split(',');
    } else {
      this._valuePath = [];
    }
  }

  private _initKey(): void {
    if (!this.lsKey) {
      if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
        throw new Error('No key or element id or name supplied!');
      }
      this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
    }
  }

  private _hookEvent(): void {
    if (this.lsEvent) {
      this._eventSubscription = Observable.fromEvent(this.er.nativeElement, this.lsEvent)
        .debounceTime(this.lsDebounce)
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

  private _initFromStorage(): void {
    if (this.lsInitFromStorage) {
      this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
        .then((storedValue: any) => {
          setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this.er.nativeElement, this.lsFalsyTransformer);
        })
        .catch((err: Error) => console.error(err));
    }
  }

  ngOnDestroy(): void {
    if (this._eventSubscription && !this._eventSubscription.closed) {
      this._eventSubscription.unsubscribe();
    }
  }
}
