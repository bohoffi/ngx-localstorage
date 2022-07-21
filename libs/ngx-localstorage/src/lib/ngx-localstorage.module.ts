import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocalStorageDirective } from './directives/ngx-localstorage.directive';
import { NgxLocalstorageConfiguration } from './interfaces/storage-configuration';
import { NGX_LOCAL_STORAGE_CONFIG } from './tokens/storage-config';

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
