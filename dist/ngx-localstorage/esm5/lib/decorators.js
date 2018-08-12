/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
import { LocalStorageService } from './ngx-localstorage.service';
import { StorageEventService } from './storage-event.service';
/**
 * @param {?=} options
 * @return {?}
 */
export function ngxLocalStorage(options) {
    return function (target, propertyDescription) {
        /** @type {?} */
        var service = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });
        /** @type {?} */
        var key = !!options && !!options.key ? options.key : propertyDescription;
        /** @type {?} */
        var eventService = new StorageEventService();
        eventService.stream.pipe(
        // TODO: filter should be more accurate
        filter(function (ev) { return ev.key.indexOf(key) >= 0; }))
            .subscribe(function (ev) {
            if (!!ev.newValue && typeof ev.newValue === 'string') {
                if (ev.newValue !== 'null') {
                    target[propertyDescription] = ev.newValue;
                }
                else {
                    target[propertyDescription] = !!options.nullTransformer ? options.nullTransformer() : null;
                }
            }
        });
        Object.defineProperty(target, propertyDescription, {
            get: function () {
                /** @type {?} */
                var storageValue = service.get(key);
                return storageValue == null && !!options.nullTransformer ? options.nullTransformer() : storageValue;
            },
            set: function (value) {
                service.set(key, value);
            }
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb2NhbHN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUU1RCxNQUFNLDBCQUEwQixPQUF1QjtJQUNyRCxPQUFPLFVBQVUsTUFBYyxFQUFFLG1CQUEyQjs7UUFFMUQsSUFBTSxPQUFPLEdBQXdCLElBQUksbUJBQW1CLENBQUM7WUFDM0QsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDNUQsQ0FBQyxDQUFDOztRQUVILElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDOztRQUUzRSxJQUFNLFlBQVksR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3BFLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSTs7UUFFdEIsTUFBTSxDQUFDLFVBQUMsRUFBZ0IsSUFBSyxPQUFBLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUN2RDthQUNFLFNBQVMsQ0FBQyxVQUFDLEVBQWdCO1lBQzFCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksT0FBTyxFQUFFLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDcEQsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtvQkFDMUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUM1RjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUwsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUU7WUFDakQsR0FBRyxFQUFFOztnQkFDSCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQ3JHO1lBQ0QsR0FBRyxFQUFFLFVBQVUsS0FBVTtnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtEZWNvcmF0b3JPcHRzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vbmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdG9yYWdlRXZlbnRTZXJ2aWNlfSBmcm9tICcuL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmd4TG9jYWxTdG9yYWdlKG9wdGlvbnM/OiBEZWNvcmF0b3JPcHRzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSA9IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKHtcclxuICAgICAgcHJlZml4OiAhIW9wdGlvbnMgJiYgISFvcHRpb25zLnByZWZpeCA/IG9wdGlvbnMucHJlZml4IDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleSA9ICEhb3B0aW9ucyAmJiAhIW9wdGlvbnMua2V5ID8gb3B0aW9ucy5rZXkgOiBwcm9wZXJ0eURlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U2VydmljZTogU3RvcmFnZUV2ZW50U2VydmljZSA9IG5ldyBTdG9yYWdlRXZlbnRTZXJ2aWNlKCk7XHJcbiAgICBldmVudFNlcnZpY2Uuc3RyZWFtLnBpcGUoXHJcbiAgICAgIC8vIFRPRE86IGZpbHRlciBzaG91bGQgYmUgbW9yZSBhY2N1cmF0ZVxyXG4gICAgICBmaWx0ZXIoKGV2OiBTdG9yYWdlRXZlbnQpID0+IGV2LmtleS5pbmRleE9mKGtleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghIWV2Lm5ld1ZhbHVlICYmIHR5cGVvZiBldi5uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGlmIChldi5uZXdWYWx1ZSAhPT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eURlc2NyaXB0aW9uXSA9IGV2Lm5ld1ZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5RGVzY3JpcHRpb25dID0gISFvcHRpb25zLm51bGxUcmFuc2Zvcm1lciA/IG9wdGlvbnMubnVsbFRyYW5zZm9ybWVyKCkgOiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlEZXNjcmlwdGlvbiwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzZXJ2aWNlLmdldChrZXkpO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWUgPT0gbnVsbCAmJiAhIW9wdGlvbnMubnVsbFRyYW5zZm9ybWVyID8gb3B0aW9ucy5udWxsVHJhbnNmb3JtZXIoKSA6IHN0b3JhZ2VWYWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHNlcnZpY2Uuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==