/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {ModuleConfig, LocalStorageDirective, LocalStorageService} from "./lib";

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('ModuleConfigToken');

@NgModule({
    imports: [],
    declarations: [
        LocalStorageDirective
    ],
    exports: [
        LocalStorageDirective
    ],
    providers: [
        LocalStorageService
    ]
})
export class NgxLocalStorageModule {

    constructor(@Optional() @SkipSelf() parentModule: NgxLocalStorageModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: ModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgxLocalStorageModule,
            providers: [
                {
                    provide: ModuleConfigToken,
                    useValue: config
                }
            ]
        }
    }
}

// export {LocalStorageService} from './lib';