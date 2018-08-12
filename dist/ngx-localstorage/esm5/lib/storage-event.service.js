/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent as observableFromEvent, BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
var StorageEventService = /** @class */ (function () {
    function StorageEventService() {
        var _this = this;
        this._eventStream = new BehaviorSubject(null);
        observableFromEvent(window, 'storage')
            .subscribe(function (ev) { return _this._eventStream.next(ev); });
    }
    Object.defineProperty(StorageEventService.prototype, "stream", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eventStream
                .asObservable().pipe(filter(function (ev) { return !!ev; }), share());
        },
        enumerable: true,
        configurable: true
    });
    StorageEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StorageEventService.ctorParameters = function () { return []; };
    return StorageEventService;
}());
export { StorageEventService };
if (false) {
    /** @type {?} */
    StorageEventService.prototype._eventStream;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFNBQVMsSUFBSSxtQkFBbUIsRUFBRSxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFPM0M7UUFBQSxpQkFHQzs0QkFMcUQsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDO1FBRzNGLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUMsRUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7S0FDaEU7SUFFRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWTtpQkFDckIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNsQixNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQyxFQUNsQixLQUFLLEVBQUUsQ0FDUixDQUFDO1NBQ0w7OztPQUFBOztnQkFoQkYsVUFBVTs7Ozs4QkFQWDs7U0FRYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDMxLjAxLjIwMTguXHJcbiAqL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Zyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge3NoYXJlLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VFdmVudFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9ldmVudFN0cmVhbTogQmVoYXZpb3JTdWJqZWN0PFN0b3JhZ2VFdmVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0b3JhZ2VFdmVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgb2JzZXJ2YWJsZUZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJylcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy5fZXZlbnRTdHJlYW0ubmV4dChldikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0cmVhbSgpOiBPYnNlcnZhYmxlPFN0b3JhZ2VFdmVudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50U3RyZWFtXHJcbiAgICAgIC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihldiA9PiAhIWV2KSxcclxuICAgICAgICBzaGFyZSgpXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==