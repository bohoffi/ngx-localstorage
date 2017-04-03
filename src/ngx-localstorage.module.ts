/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {ModuleConfig, LocalStorageDirective, LocalStorageService} from "./lib";

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('moduleConfig');

@NgModule({
    imports: [],
    declarations: [
        LocalStorageDirective
    ],
    exports: [
        LocalStorageDirective
    ]
})
export class NgxLocalStorageModule {

    static forRoot(config?: ModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgxLocalStorageModule,
            providers: [
                {
                    provide: ModuleConfigToken,
                    useValue: config
                },
                {
                    provide: LocalStorageService,
                    useFactory: (moduleConfig: ModuleConfig) => {
                        return new LocalStorageService(moduleConfig);
                    },
                    deps: [
                        ModuleConfigToken
                    ]
                }
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: NgxLocalStorageModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
}

// export {LocalStorageService} from './lib';
