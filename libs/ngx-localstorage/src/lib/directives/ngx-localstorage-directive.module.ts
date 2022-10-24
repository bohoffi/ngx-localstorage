import { NgModule } from '@angular/core';
import { LocalStorageDirective } from './ngx-localstorage.directive';

@NgModule({
  declarations: [LocalStorageDirective],
  exports: [LocalStorageDirective]
})
export class NgxLocalstorageDirectiveModule { }
