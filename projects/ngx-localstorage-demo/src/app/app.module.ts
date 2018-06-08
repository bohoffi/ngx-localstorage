import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {DemoModule} from './modules/demo/demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MatToolbarModule,

    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
