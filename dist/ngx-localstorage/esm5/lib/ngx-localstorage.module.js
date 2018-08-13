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
    NgxLocalStorageModule.ctorParameters = function () { return [
        { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NgxLocalStorageModule;
}());
export { NgxLocalStorageModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL25neC1sb2NhbHN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxnQ0FBZ0MsWUFBMEI7SUFDOUQsT0FBTyxJQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQzlDOztJQWlDQywrQkFBb0MsWUFBbUM7UUFDckUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1NBQzdGO0tBQ0Y7Ozs7O0lBeEJNLDZCQUFPOzs7O0lBQWQsVUFBZSxNQUFxQjtRQUNsQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDLElBQUksRUFBRTt3QkFDSixpQkFBaUI7cUJBQ2xCO2lCQUNGO2dCQUNELG1CQUFtQjthQUNwQjtTQUNGLENBQUM7S0FDSDs7Z0JBN0JGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtpQkFDRjs7OztnQkFzQm1ELHFCQUFxQix1QkFBMUQsUUFBUSxZQUFJLFFBQVE7O2dDQTVDbkM7O1NBdUJhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtbG9jYWxzdG9yYWdlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnVG9rZW59IGZyb20gJy4vdG9rZW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWc6IE1vZHVsZUNvbmZpZyk6IExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9jYWxTdG9yYWdlRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTW9kdWxlQ29uZmlnVG9rZW4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgZGVwczogW1xyXG4gICAgICAgICAgICBNb2R1bGVDb25maWdUb2tlblxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU3RvcmFnZUV2ZW50U2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19