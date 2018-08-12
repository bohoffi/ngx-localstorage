/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent as observableFromEvent, BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
export class StorageEventService {
    constructor() {
        this._eventStream = new BehaviorSubject(null);
        observableFromEvent(window, 'storage')
            .subscribe((ev) => this._eventStream.next(ev));
    }
    /**
     * @return {?}
     */
    get stream() {
        return this._eventStream
            .asObservable().pipe(filter(ev => !!ev), share());
    }
}
StorageEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StorageEventService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StorageEventService.prototype._eventStream;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFNBQVMsSUFBSSxtQkFBbUIsRUFBRSxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxNQUFNO0lBSUo7NEJBRnNELElBQUksZUFBZSxDQUFlLElBQUksQ0FBQztRQUczRixtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxDQUFDLEVBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEU7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ3JCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNsQixLQUFLLEVBQUUsQ0FDUixDQUFDO0tBQ0w7OztZQWhCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAzMS4wMS4yMDE4LlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtzaGFyZSwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlRXZlbnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfZXZlbnRTdHJlYW06IEJlaGF2aW9yU3ViamVjdDxTdG9yYWdlRXZlbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTdG9yYWdlRXZlbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIG9ic2VydmFibGVGcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuX2V2ZW50U3RyZWFtLm5leHQoZXYpKTtcclxuICB9XHJcblxyXG4gIGdldCBzdHJlYW0oKTogT2JzZXJ2YWJsZTxTdG9yYWdlRXZlbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9ldmVudFN0cmVhbVxyXG4gICAgICAuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuICAgICAgICBmaWx0ZXIoZXYgPT4gISFldiksXHJcbiAgICAgICAgc2hhcmUoKVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=