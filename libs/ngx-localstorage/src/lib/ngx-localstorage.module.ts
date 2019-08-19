import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {NgxLocalstorageConfiguration} from './interfaces';
import {LocalStorageService} from './services/ngx-localstorage.service';
import {StorageEventService} from './services/storage-event.service';
import {LocalStorageDirective} from './directives/ngx-localstorage.directive';
import {NgxLocalstorageConfigurationToken} from './token';

export function provideStorageService(moduleConfig: NgxLocalstorageConfiguration): LocalStorageService {
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
  static forRoot(config?: NgxLocalstorageConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxLocalStorageModule,
      providers: [
        {
          provide: NgxLocalstorageConfigurationToken,
          useValue: config
        },
        {
          provide: LocalStorageService,
          useFactory: provideStorageService,
          deps: [
            NgxLocalstorageConfigurationToken
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
