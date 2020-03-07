import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { NgxLocalstorageConfiguration } from './interfaces/storage-configuration';
import { LocalStorageDirective } from './directives/ngx-localstorage.directive';
import { NGX_LOCAL_STORAGE_CONFIG } from './tokens/storage-config';
import { DefaultSerializer } from './classes/default-serializer';
import { NGX_LOCAL_STORAGE_SERIALIZER } from './tokens/storage-serializer';

/**
 * Provides the librarys module.
 */
@NgModule({
  imports: [
  ],
  declarations: [
    LocalStorageDirective
  ],
  exports: [
    LocalStorageDirective
  ],
  providers: [
    {
      provide: NGX_LOCAL_STORAGE_SERIALIZER,
      useClass: DefaultSerializer
    }
  ]
})
export class NgxLocalStorageModule {

  /**
   * Initializes the module for the root module with the given configuration.
   */
  public static forRoot(config?: NgxLocalstorageConfiguration): ModuleWithProviders<NgxLocalStorageModule> {
    return {
      ngModule: NgxLocalStorageModule,
      providers: [
        {
          provide: NGX_LOCAL_STORAGE_CONFIG,
          useValue: config
        }
      ]
    };
  }

  /**
   * Creates a new instance.
   */
  constructor(@Optional() @SkipSelf() parentModule: NgxLocalStorageModule) {
    if (parentModule) {
      throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
    }
  }
}
