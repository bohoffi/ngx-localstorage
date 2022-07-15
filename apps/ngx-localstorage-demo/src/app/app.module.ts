import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { DemoModule } from './modules/demo/demo.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  {
    path: 'sub',
    loadChildren: () => import('./sub-module/sub-module.module').then(m => m.SubModuleModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),

    MatToolbarModule,

    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),

    DemoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
