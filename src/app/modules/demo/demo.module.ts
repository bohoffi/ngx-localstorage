import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material';

import {DecoratorComponent} from './decorator/decorator.component';
import {DirectiveComponent} from './directive/directive.component';
import {NgxLocalStorageModule} from '../ngx-localstorage/ngx-localstorage.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    NgxLocalStorageModule.forRoot()
  ],
  declarations: [DecoratorComponent, DirectiveComponent],
  exports: [DecoratorComponent, DirectiveComponent]
})
export class DemoModule {
}
