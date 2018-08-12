/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
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
var NgxLocalStorageModule = /** @class */ (function () {
    function NgxLocalStorageModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxLocalStorageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
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
    };
    NgxLocalStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        LocalStorageDirective
                    ],
                    exports: [
                        LocalStorageDirective
                    ]
                },] }
    ];
    /** @nocollapse */
    NgxLocalStorageModule.ctorParameters = function () { return [
        { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NgxLocalStorageModule;
}());
export { NgxLocalStorageModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL25neC1sb2NhbHN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUdoRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7O0FBRTFDLE1BQU0sZ0NBQWdDLFlBQTBCO0lBQzlELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUM5Qzs7SUFtQ0MsK0JBQW9DLFlBQW1DO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztTQUM3RjtLQUNGOzs7OztJQXhCTSw2QkFBTzs7OztJQUFkLFVBQWUsTUFBcUI7UUFDbEMsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCO3FCQUNsQjtpQkFDRjtnQkFDRCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0tBQ0g7O2dCQS9CRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjtxQkFDdEI7aUJBQ0Y7Ozs7Z0JBdUJtRCxxQkFBcUIsdUJBQTFELFFBQVEsWUFBSSxRQUFROztnQ0E5Q25DOztTQXdCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb2R1bGVDb25maWdUb2tlbn0gZnJvbSAnLi90b2tlbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZVNlcnZpY2UobW9kdWxlQ29uZmlnOiBNb2R1bGVDb25maWcpOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKG1vZHVsZUNvbmZpZyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9jYWxTdG9yYWdlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4TG9jYWxTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNb2R1bGVDb25maWdUb2tlbixcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBNb2R1bGVDb25maWdUb2tlblxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgU3RvcmFnZUV2ZW50U2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmd4TG9jYWxTdG9yYWdlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=