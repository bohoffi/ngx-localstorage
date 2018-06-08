import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';
import {ModuleConfig} from './interfaces';
import {LocalStorageDirective} from './directives/local-storage.directive';
import {StorageEventService} from './services/storage-event.service';

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('moduleConfig');

export function provideStorageService(moduleConfig: ModuleConfig): LocalStorageService {
  return new LocalStorageService(moduleConfig);
}

@NgModule({
  imports: [
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
        },
        StorageEventService
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: NgxLocalStorageModule) {
    if (parentModule) {
      throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
    }
  }
}
