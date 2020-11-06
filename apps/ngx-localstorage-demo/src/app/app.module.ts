import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { DemoModule } from './modules/demo/demo.module';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forRoot(ROUTES),

    MatToolbarModule,

    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
