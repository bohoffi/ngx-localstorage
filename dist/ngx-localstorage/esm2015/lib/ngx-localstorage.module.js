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
NgxLocalStorageModule.ctorParameters = () => [
    { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL25neC1sb2NhbHN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUdoRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7O0FBRTFDLE1BQU0sZ0NBQWdDLFlBQTBCO0lBQzlELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUM5QztBQWFELE1BQU07Ozs7SUFzQkosWUFBb0MsWUFBbUM7UUFDckUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1NBQzdGO0tBQ0Y7Ozs7O0lBeEJELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBcUI7UUFDbEMsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCO3FCQUNsQjtpQkFDRjtnQkFDRCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0tBQ0g7OztZQS9CRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtpQkFDdEI7YUFDRjs7OztZQXVCbUQscUJBQXFCLHVCQUExRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vbmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmFnZUV2ZW50U2VydmljZX0gZnJvbSAnLi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtbG9jYWxzdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge01vZHVsZUNvbmZpZ1Rva2VufSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWc6IE1vZHVsZUNvbmZpZyk6IExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UobW9kdWxlQ29uZmlnKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExvY2FsU3RvcmFnZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neExvY2FsU3RvcmFnZU1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE1vZHVsZUNvbmZpZ1Rva2VuLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIE1vZHVsZUNvbmZpZ1Rva2VuXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBTdG9yYWdlRXZlbnRTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTmd4TG9jYWxTdG9yYWdlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==