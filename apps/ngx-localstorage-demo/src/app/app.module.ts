import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { DirectiveComponent } from './components/directive/directive.component';
import { EventStreamComponent } from './components/event-stream/event-stream.component';
import { StorageServiceComponent } from './components/storage-service/storage-service.component';

const ROUTES: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    outlet: 'lazy'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    StorageServiceComponent,
    EventStreamComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,

    NgxLocalStorageModule.forRoot({ delimiter: '@', prefix: 'test' }),

    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
