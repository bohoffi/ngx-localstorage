/**
 * Created by bohoffi on 03.04.2017.
 */
import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleConfig} from './lib/interfaces';
import {LocalStorageService} from './lib/services/local-storage.service';
import {StorageEventService} from './lib/services/storage-event.service';
import {LocalStorageDirective} from './lib/directives/local-storage.directive';

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

export {LocalStorageService} from './lib/services/local-storage.service';
export {StorageEventService} from './lib/services/storage-event.service';
export {ngxLocalStorage} from './lib/decorators';
