import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import {AppComponent} from './app.component';
import {DemoModule} from './modules/demo/demo.module';
import { ExampleViewerModule } from '@balticcode/ngx-example-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MatToolbarModule,

    DemoModule,

    ExampleViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
