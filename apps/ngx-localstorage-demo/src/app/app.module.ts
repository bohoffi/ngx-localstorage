import { NgModule, SecurityContext } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { LocalStorageDirective, NgxLocalstorageConfiguration, NGX_LOCAL_STORAGE_CONFIG } from "ngx-localstorage";
import { DirectiveComponent } from "./components/directive/directive.component";
import { EventStreamComponent } from "./components/event-stream/event-stream.component";
import { StorageServiceComponent } from "./components/storage-service/storage-service.component";
import { AppComponent } from "./components/app/app.component";
import { RootComponent } from "./components/root/root.component";
import { ApiComponent } from "./components/api/api.component";
import { DemoContentComponent } from "./components/demo-content/demo-content.component";

const ROUTES: Routes = [
  {
    path: "",
    component: AppComponent,
    title: 'ngx-localstorage',
    children: [
      {
        path: '',
        component: DemoContentComponent,
        title: 'ngx-localstorage - DEMO',
        children: [
          {
            path: "lazy",
            loadChildren: () =>
              import("./lazy/lazy.module").then((m) => m.LazyModule),
            outlet: "lazy",
          },
        ]
      },
      {
        path: "api",
        component: ApiComponent,
        title: 'ngx-localstorage - API'
      },
    ],
  },
];

const ngxLocalstorageConfiguration: NgxLocalstorageConfiguration = {
  delimiter: '@',
  prefix: 'test'
};

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    StorageServiceComponent,
    EventStreamComponent,
    RootComponent,
    ApiComponent,
    DemoContentComponent,
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

    LocalStorageDirective,

    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  providers: [
    {
      provide: NGX_LOCAL_STORAGE_CONFIG,
      useValue: ngxLocalstorageConfiguration
    }
  ],
  bootstrap: [RootComponent],
})
export class AppModule { }
