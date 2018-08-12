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
var LocalStorageDirective = /** @class */ (function () {
    function LocalStorageDirective(er, lss, es) {
        var _this = this;
        this.er = er;
        this.lss = lss;
        this.es = es;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this.es.stream.pipe(
        // TODO: filter should be more accurate
        filter(function (ev) { return ev.key.indexOf(_this.lsKey) >= 0; }))
            .subscribe(function (ev) {
            setProperty(_this._valuePath.length ? _this._valuePath : ['value'], ev.newValue, _this.er.nativeElement, _this.lsFalsyTransformer);
        });
    }
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initKey();
        this._initFromStorage();
        this._hookEvent();
    };
    Object.defineProperty(LocalStorageDirective.prototype, "lsValuePath", {
        set: /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path != null) {
                this._valuePath = Array.isArray(path) ? path : path.split(',');
            }
            else {
                this._valuePath = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._initKey = /**
     * @return {?}
     */
    function () {
        if (!this.lsKey) {
            if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._hookEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.lsEvent) {
            this._eventSubscription = observableFromEvent(this.er.nativeElement, this.lsEvent).pipe(debounceTime(this.lsDebounce))
                .subscribe(function () {
                _this.lss.asPromisable().set(_this.lsKey, getProperty(_this._valuePath.length ? _this._valuePath : ['value'], _this.er.nativeElement), _this.lsPrefix)
                    .then(function () {
                    _this.lss.asPromisable().get(_this.lsKey, _this.lsPrefix)
                        .then(function (value) {
                        _this.lsStoredValue.emit(value);
                    })
                        .catch(function (err) { return console.error(err); });
                })
                    .catch(function (err) { return console.error(err); });
            });
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._initFromStorage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.lsInitFromStorage) {
            this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                .then(function (storedValue) {
                setProperty(_this._valuePath.length ? _this._valuePath : ['value'], storedValue, _this.er.nativeElement, _this.lsFalsyTransformer);
            })
                .catch(function (err) { return console.error(err); });
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    };
    LocalStorageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxLocalStorage]'
                },] }
    ];
    /** @nocollapse */
    LocalStorageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LocalStorageService },
        { type: StorageEventService }
    ]; };
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
    return LocalStorageDirective;
}());
export { LocalStorageDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxJQUFJLG1CQUFtQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0lBMEIzRCwrQkFBb0IsRUFBYyxFQUNkLEtBQ0E7UUFGcEIsaUJBV0M7UUFYbUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHO1FBQ0gsT0FBRSxHQUFGLEVBQUU7MEJBZFQsQ0FBQztpQ0FFTSxLQUFLOzZCQUtULElBQUksWUFBWSxFQUFPOzBCQUdSLEVBQUU7UUFNL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSTs7UUFFakIsTUFBTSxDQUFDLFVBQUMsRUFBZ0IsSUFBSyxPQUFBLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FDOUQ7YUFDRSxTQUFTLENBQUMsVUFBQyxFQUFnQjtZQUMxQixXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMs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SUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNuRCxJQUFJLENBQUMsVUFBQyxXQUFnQjtnQkFDckIsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNoSSxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQVUsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztTQUM5Qzs7Ozs7SUFHSCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7O2dCQS9GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBVmlDLFVBQVU7Z0JBS3BDLG1CQUFtQjtnQkFDbkIsbUJBQW1COzs7d0JBT3hCLEtBQUssU0FBQyxpQkFBaUI7MkJBRXZCLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLO29DQUVMLEtBQUs7cUNBRUwsS0FBSztnQ0FHTCxNQUFNOzhCQXlCTixLQUFLOztnQ0F0RFI7O1NBY2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAwMy4wNC4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtnZXRQcm9wZXJ0eSwgc2V0UHJvcGVydHl9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4uL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hMb2NhbFN0b3JhZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCduZ3hMb2NhbFN0b3JhZ2UnKVxyXG4gIGxzS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsc1ByZWZpeDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNFdmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNEZWJvdW5jZSA9IDA7XHJcbiAgQElucHV0KClcclxuICBsc0luaXRGcm9tU3RvcmFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNGYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBsc1N0b3JlZFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdmFsdWVQYXRoOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVyOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbHNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXM6IFN0b3JhZ2VFdmVudFNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLmVzLnN0cmVhbS5waXBlKFxyXG4gICAgLy8gVE9ETzogZmlsdGVyIHNob3VsZCBiZSBtb3JlIGFjY3VyYXRlXHJcbiAgICAgIGZpbHRlcigoZXY6IFN0b3JhZ2VFdmVudCkgPT4gZXYua2V5LmluZGV4T2YodGhpcy5sc0tleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByb3BlcnR5KHRoaXMuX3ZhbHVlUGF0aC5sZW5ndGggPyB0aGlzLl92YWx1ZVBhdGggOiBbJ3ZhbHVlJ10sIGV2Lm5ld1ZhbHVlLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNGYWxzeVRyYW5zZm9ybWVyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0S2V5KCk7XHJcbiAgICB0aGlzLl9pbml0RnJvbVN0b3JhZ2UoKTtcclxuICAgIHRoaXMuX2hvb2tFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbHNWYWx1ZVBhdGgocGF0aDogYW55W10gfCBzdHJpbmcpIHtcclxuICAgIGlmIChwYXRoICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fdmFsdWVQYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl92YWx1ZVBhdGggPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRLZXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubHNLZXkpIHtcclxuICAgICAgaWYgKCF0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgJiYgIXRoaXMuZXIubmF0aXZlRWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBrZXkgb3IgZWxlbWVudCBpZCBvciBuYW1lIHN1cHBsaWVkIScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubHNLZXkgPSB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgfHwgdGhpcy5lci5uYXRpdmVFbGVtZW50Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ob29rRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0V2ZW50KSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZUZyb21FdmVudCh0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNFdmVudCkucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5sc0RlYm91bmNlKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubHNzLmFzUHJvbWlzYWJsZSgpLnNldCh0aGlzLmxzS2V5LFxyXG4gICAgICAgICAgICBnZXRQcm9wZXJ0eSh0aGlzLl92YWx1ZVBhdGgubGVuZ3RoID8gdGhpcy5fdmFsdWVQYXRoIDogWyd2YWx1ZSddLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmxzUHJlZml4KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sc3MuYXNQcm9taXNhYmxlKCkuZ2V0KHRoaXMubHNLZXksIHRoaXMubHNQcmVmaXgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxzU3RvcmVkVmFsdWUuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RnJvbVN0b3JhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0luaXRGcm9tU3RvcmFnZSkge1xyXG4gICAgICB0aGlzLmxzcy5hc1Byb21pc2FibGUoKS5nZXQodGhpcy5sc0tleSwgdGhpcy5sc1ByZWZpeClcclxuICAgICAgICAudGhlbigoc3RvcmVkVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvcGVydHkodGhpcy5fdmFsdWVQYXRoLmxlbmd0aCA/IHRoaXMuX3ZhbHVlUGF0aCA6IFsndmFsdWUnXSwgc3RvcmVkVmFsdWUsIHRoaXMuZXIubmF0aXZlRWxlbWVudCwgdGhpcy5sc0ZhbHN5VHJhbnNmb3JtZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXZlbnRTdWJzY3JpcHRpb24gJiYgIXRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=