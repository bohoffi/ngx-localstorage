import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {ModuleConfig} from './interfaces';
import {LocalStorageService} from './ngx-localstorage.service';
import {StorageEventService} from './storage-event.service';
import {LocalStorageDirective} from './directives/ngx-localstorage.directive';
import {ModuleConfigToken} from './token';

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
