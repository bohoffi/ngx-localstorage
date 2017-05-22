/**
 * Created by bohoffi on 03.04.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalStorageDirective, LocalStorageService, ModuleConfig} from './lib/index';

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('moduleConfig');

export function provideStorageService(moduleConfig: ModuleConfig): LocalStorageService {
    return new LocalStorageService(moduleConfig);
}

@NgModule({
    imports: [
        CommonModule
    ],
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
                    useFactory: provideStorageService,
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

export {LocalStorageService} from './lib/index';
export {ngxLocalStorage} from './lib/decorators';
