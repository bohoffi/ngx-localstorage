import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecoratorComponent} from './decorator/decorator.component';
import {NgxLocalStorageModule} from "../ngx-localstorage/ngx-localstorage.module";
import {DirectiveComponent} from './directive/directive.component';

@NgModule({
  imports: [
    CommonModule,

    NgxLocalStorageModule.forRoot()
  ],
  declarations: [DecoratorComponent, DirectiveComponent],
  exports: [DecoratorComponent, DirectiveComponent]
})
export class DemoModule {
}
