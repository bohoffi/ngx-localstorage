/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LocalStorageService } from './ngx-localstorage.service';
import { StorageEventService } from './storage-event.service';
import { LocalStorageDirective } from './directives/ngx-localstorage.directive';
import { ModuleConfigToken } from './token';
/**
 * @param {?} moduleConfig
 * @return {?}
 */
export function provideStorageService(moduleConfig) {
    return new LocalStorageService(moduleConfig);
}
export class NgxLocalStorageModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgxLocalStorageModule,
            providers: [
                {
                    provide: ModuleConfigToken,
                    useValue: config
                },
                {
                    provide: LocalStorageService,
                    useFactory: provideStorageService,
                    deps: [
                        ModuleConfigToken
                    ]
                },
                StorageEventService
            ]
        };
    }
}
NgxLocalStorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    LocalStorageDirective
                ],
                exports: [
                    LocalStorageDirective
                ]
            },] }
];
/** @nocollapse */
NgxLocalStorageModule.ctorParameters = () => [
    { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL25neC1sb2NhbHN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxnQ0FBZ0MsWUFBMEI7SUFDOUQsT0FBTyxJQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQzlDO0FBWUQsTUFBTTs7OztJQXFCSixZQUFvQyxZQUFtQztRQUNyRSxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7U0FDN0Y7S0FDRjs7Ozs7SUF4QkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFxQjtRQUNsQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDLElBQUksRUFBRTt3QkFDSixpQkFBaUI7cUJBQ2xCO2lCQUNGO2dCQUNELG1CQUFtQjthQUNwQjtTQUNGLENBQUM7S0FDSDs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO2lCQUN0QjthQUNGOzs7O1lBc0JtRCxxQkFBcUIsdUJBQTFELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge01vZHVsZUNvbmZpZ30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7U3RvcmFnZUV2ZW50U2VydmljZX0gZnJvbSAnLi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25neC1sb2NhbHN0b3JhZ2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtNb2R1bGVDb25maWdUb2tlbn0gZnJvbSAnLi90b2tlbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN0b3JhZ2VTZXJ2aWNlKG1vZHVsZUNvbmZpZzogTW9kdWxlQ29uZmlnKTogTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKG1vZHVsZUNvbmZpZyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExvY2FsU3RvcmFnZURpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neExvY2FsU3RvcmFnZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4TG9jYWxTdG9yYWdlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBNb2R1bGVDb25maWdUb2tlbixcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICBkZXBzOiBbXHJcbiAgICAgICAgICAgIE1vZHVsZUNvbmZpZ1Rva2VuXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTdG9yYWdlRXZlbnRTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05neExvY2FsU3RvcmFnZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=