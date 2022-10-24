import { NgModule } from '@angular/core';
import { LocalStorageDirective } from './ngx-localstorage.directive';

/**
 * Module providing the libraries directive.
 */
@NgModule({
  declarations: [LocalStorageDirective],
  exports: [LocalStorageDirective]
})
export class NgxLocalstorageDirectiveModule { }
