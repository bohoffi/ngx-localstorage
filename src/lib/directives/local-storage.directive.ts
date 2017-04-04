/**
 * Created by bohoffi on 03.04.2017.
 */
import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import {LocalStorageService} from '../services';
import {getProperty, setProperty} from '../utils';

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

    @Output()
    lsStoredValue = new EventEmitter<any>();

    private _eventSubscription: Subscription;
    private _valuePath: Array<any> = [];

    constructor(private _element: ElementRef,
                private _service: LocalStorageService) {
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
            if (!this._element.nativeElement.id && !this._element.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this._element.nativeElement.id || this._element.nativeElement.name;
        }
    }

    private _hookEvent(): void {
        if (this.lsEvent) {
            this._eventSubscription = Observable.fromEvent(this._element.nativeElement, this.lsEvent)
                .debounceTime(this.lsDebounce)
                .subscribe(() => {
                    this._service.set(this.lsKey,
                        getProperty(this._valuePath.length ? this._valuePath : ['value'], this._element.nativeElement),
                        this.lsPrefix)
                        .then(() => {
                            this._service.get(this.lsKey, this.lsPrefix)
                                .then(value => {
                                    this.lsStoredValue.emit(value);
                                })
                                .catch(err => console.error(err));
                        })
                        .catch(err => console.error(err));
                });
        }
    }

    private _initFromStorage(): void {
        if (this.lsInitFromStorage) {
            this._service.get(this.lsKey, this.lsPrefix)
                .then(storedValue => {
                    if (!!storedValue && typeof storedValue === 'string' && storedValue !== 'null') {
                        setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this._element.nativeElement);
                    }
                })
                .catch(err => console.error(err));
        }
    }

    ngOnDestroy(): void {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    }
}
