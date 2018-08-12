/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { getProperty, setProperty } from '../utils';
import { LocalStorageService } from '../ngx-localstorage.service';
import { StorageEventService } from '../storage-event.service';
export class LocalStorageDirective {
    /**
     * @param {?} er
     * @param {?} lss
     * @param {?} es
     */
    constructor(er, lss, es) {
        this.er = er;
        this.lss = lss;
        this.es = es;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this.es.stream.pipe(
        // TODO: filter should be more accurate
        filter((ev) => ev.key.indexOf(this.lsKey) >= 0))
            .subscribe((ev) => {
            setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this.er.nativeElement, this.lsFalsyTransformer);
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initKey();
        this._initFromStorage();
        this._hookEvent();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    set lsValuePath(path) {
        if (path != null) {
            this._valuePath = Array.isArray(path) ? path : path.split(',');
        }
        else {
            this._valuePath = [];
        }
    }
    /**
     * @return {?}
     */
    _initKey() {
        if (!this.lsKey) {
            if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
        }
    }
    /**
     * @return {?}
     */
    _hookEvent() {
        if (this.lsEvent) {
            this._eventSubscription = observableFromEvent(this.er.nativeElement, this.lsEvent).pipe(debounceTime(this.lsDebounce))
                .subscribe(() => {
                this.lss.asPromisable().set(this.lsKey, getProperty(this._valuePath.length ? this._valuePath : ['value'], this.er.nativeElement), this.lsPrefix)
                    .then(() => {
                    this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                        .then((value) => {
                        this.lsStoredValue.emit(value);
                    })
                        .catch((err) => console.error(err));
                })
                    .catch((err) => console.error(err));
            });
        }
    }
    /**
     * @return {?}
     */
    _initFromStorage() {
        if (this.lsInitFromStorage) {
            this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                .then((storedValue) => {
                setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this.er.nativeElement, this.lsFalsyTransformer);
            })
                .catch((err) => console.error(err));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    }
}
LocalStorageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxLocalStorage]'
            },] }
];
/** @nocollapse */
LocalStorageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LocalStorageService },
    { type: StorageEventService }
];
LocalStorageDirective.propDecorators = {
    lsKey: [{ type: Input, args: ['ngxLocalStorage',] }],
    lsPrefix: [{ type: Input }],
    lsEvent: [{ type: Input }],
    lsDebounce: [{ type: Input }],
    lsInitFromStorage: [{ type: Input }],
    lsFalsyTransformer: [{ type: Input }],
    lsStoredValue: [{ type: Output }],
    lsValuePath: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LocalStorageDirective.prototype.lsKey;
    /** @type {?} */
    LocalStorageDirective.prototype.lsPrefix;
    /** @type {?} */
    LocalStorageDirective.prototype.lsEvent;
    /** @type {?} */
    LocalStorageDirective.prototype.lsDebounce;
    /** @type {?} */
    LocalStorageDirective.prototype.lsInitFromStorage;
    /** @type {?} */
    LocalStorageDirective.prototype.lsFalsyTransformer;
    /** @type {?} */
    LocalStorageDirective.prototype.lsStoredValue;
    /** @type {?} */
    LocalStorageDirective.prototype._eventSubscription;
    /** @type {?} */
    LocalStorageDirective.prototype._valuePath;
    /** @type {?} */
    LocalStorageDirective.prototype.er;
    /** @type {?} */
    LocalStorageDirective.prototype.lss;
    /** @type {?} */
    LocalStorageDirective.prototype.es;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxJQUFJLG1CQUFtQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFLN0QsTUFBTTs7Ozs7O0lBcUJKLFlBQW9CLEVBQWMsRUFDZCxLQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHO1FBQ0gsT0FBRSxHQUFGLEVBQUU7MEJBZFQsQ0FBQztpQ0FFTSxLQUFLOzZCQUtULElBQUksWUFBWSxFQUFPOzBCQUdSLEVBQUU7UUFNL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSTs7UUFFakIsTUFBTSxDQUFDLENBQUMsRUFBZ0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM5RDthQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQWdCLEVBQUUsRUFBRTtZQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENB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LElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ25ELElBQUksQ0FBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRTtnQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNoSSxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDOzs7OztJQUdILFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7OztZQS9GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7OztZQVZpQyxVQUFVO1lBS3BDLG1CQUFtQjtZQUNuQixtQkFBbUI7OztvQkFPeEIsS0FBSyxTQUFDLGlCQUFpQjt1QkFFdkIsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsS0FBSztpQ0FFTCxLQUFLOzRCQUdMLE1BQU07MEJBeUJOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDAzLjA0LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Zyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2RlYm91bmNlVGltZSwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge2dldFByb3BlcnR5LCBzZXRQcm9wZXJ0eX0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7U3RvcmFnZUV2ZW50U2VydmljZX0gZnJvbSAnLi4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neExvY2FsU3RvcmFnZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoJ25neExvY2FsU3RvcmFnZScpXHJcbiAgbHNLZXk6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxzUHJlZml4OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsc0V2ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsc0RlYm91bmNlID0gMDtcclxuICBASW5wdXQoKVxyXG4gIGxzSW5pdEZyb21TdG9yYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBsc0ZhbHN5VHJhbnNmb3JtZXI/OiAoKSA9PiBhbnk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGxzU3RvcmVkVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfZXZlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF92YWx1ZVBhdGg6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXI6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsc3M6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlczogU3RvcmFnZUV2ZW50U2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuZXMuc3RyZWFtLnBpcGUoXHJcbiAgICAvLyBUT0RPOiBmaWx0ZXIgc2hvdWxkIGJlIG1vcmUgYWNjdXJhdGVcclxuICAgICAgZmlsdGVyKChldjogU3RvcmFnZUV2ZW50KSA9PiBldi5rZXkuaW5kZXhPZih0aGlzLmxzS2V5KSA+PSAwKVxyXG4gICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChldjogU3RvcmFnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UHJvcGVydHkodGhpcy5fdmFsdWVQYXRoLmxlbmd0aCA/IHRoaXMuX3ZhbHVlUGF0aCA6IFsndmFsdWUnXSwgZXYubmV3VmFsdWUsIHRoaXMuZXIubmF0aXZlRWxlbWVudCwgdGhpcy5sc0ZhbHN5VHJhbnNmb3JtZXIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRLZXkoKTtcclxuICAgIHRoaXMuX2luaXRGcm9tU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5faG9va0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsc1ZhbHVlUGF0aChwYXRoOiBhbnlbXSB8IHN0cmluZykge1xyXG4gICAgaWYgKHBhdGggIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl92YWx1ZVBhdGggPSBBcnJheS5pc0FycmF5KHBhdGgpID8gcGF0aCA6IHBhdGguc3BsaXQoJywnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlUGF0aCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdEtleSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5sc0tleSkge1xyXG4gICAgICBpZiAoIXRoaXMuZXIubmF0aXZlRWxlbWVudC5pZCAmJiAhdGhpcy5lci5uYXRpdmVFbGVtZW50Lm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGtleSBvciBlbGVtZW50IGlkIG9yIG5hbWUgc3VwcGxpZWQhJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sc0tleSA9IHRoaXMuZXIubmF0aXZlRWxlbWVudC5pZCB8fCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hvb2tFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxzRXZlbnQpIHtcclxuICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlRnJvbUV2ZW50KHRoaXMuZXIubmF0aXZlRWxlbWVudCwgdGhpcy5sc0V2ZW50KS5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmxzRGVib3VuY2UpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sc3MuYXNQcm9taXNhYmxlKCkuc2V0KHRoaXMubHNLZXksXHJcbiAgICAgICAgICAgIGdldFByb3BlcnR5KHRoaXMuX3ZhbHVlUGF0aC5sZW5ndGggPyB0aGlzLl92YWx1ZVBhdGggOiBbJ3ZhbHVlJ10sIHRoaXMuZXIubmF0aXZlRWxlbWVudCksXHJcbiAgICAgICAgICAgIHRoaXMubHNQcmVmaXgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxzcy5hc1Byb21pc2FibGUoKS5nZXQodGhpcy5sc0tleSwgdGhpcy5sc1ByZWZpeClcclxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubHNTdG9yZWRWYWx1ZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRGcm9tU3RvcmFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxzSW5pdEZyb21TdG9yYWdlKSB7XHJcbiAgICAgIHRoaXMubHNzLmFzUHJvbWlzYWJsZSgpLmdldCh0aGlzLmxzS2V5LCB0aGlzLmxzUHJlZml4KVxyXG4gICAgICAgIC50aGVuKChzdG9yZWRWYWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBzZXRQcm9wZXJ0eSh0aGlzLl92YWx1ZVBhdGgubGVuZ3RoID8gdGhpcy5fdmFsdWVQYXRoIDogWyd2YWx1ZSddLCBzdG9yZWRWYWx1ZSwgdGhpcy5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmxzRmFsc3lUcmFuc2Zvcm1lcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9ldmVudFN1YnNjcmlwdGlvbiAmJiAhdGhpcy5fZXZlbnRTdWJzY3JpcHRpb24uY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==