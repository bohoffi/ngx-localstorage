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
   * Creates and configures a module with all the providers and directives.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [NgxLocalStorageModule.forRoot(config)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param config An `NgxLocalstorageConfiguration` configuration object that controls how accessing localstorage is performed.
   * @return The new `NgModule`.
   *
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
   * Creates and configures a module with all the providers and directives.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [NgxLocalStorageModule.forChild()]
   * })
   * class MyNgModule {}
   * ```
   *
   * @return The new NgModule.
   *
   */
  public static forChild(): ModuleWithProviders<NgxLocalStorageModule> {
    return { ngModule: NgxLocalStorageModule }
  }
}
