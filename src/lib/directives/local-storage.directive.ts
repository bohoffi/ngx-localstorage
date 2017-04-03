/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[ngxLocalStorage]'
})
export class LocalStorageDirective implements AfterViewInit, OnDestroy {

    @Input('ngxLocalStorage')
    lsKey: string;
    @Input()
    prefix: string;
    @Input()
    lsEvent: string;
    @Input()
    lsDebounce: number = 0;

    private _eventSubscription: Subscription;

    constructor(private _element: ElementRef,
                private _service: LocalStorageService) {
    }

    ngAfterViewInit(): void {
        this.initKey();
        this.hookEvent();
    }

    private initKey(): void {
        if (!this.lsKey) {
            if (!this._element.nativeElement.id) {
                throw new Error('no key or element id supplied!');
            }
            this.lsKey = this._element.nativeElement.id;
        }
    }

    private hookEvent(): void {
        if (this.lsEvent) {
            this._eventSubscription = Observable.fromEvent(this._element.nativeElement, this.lsEvent)
                .debounceTime(this.lsDebounce)
                .subscribe((e: Event) => {
                    console.log(e);
                    if (e.srcElement instanceof HTMLInputElement) {
                        this._service.set(this.lsKey, (<HTMLInputElement>e.srcElement).value)
                            .then(res => console.log('value saved: ', res))
                            .catch(err => console.error(err));
                    }
                });
        }
    }

    ngOnDestroy(): void {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    }
}
