import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DemoModule} from "./modules/demo/demo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
