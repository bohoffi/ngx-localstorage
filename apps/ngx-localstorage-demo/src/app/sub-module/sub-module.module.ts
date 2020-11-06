import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubComponent } from './sub/sub.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxLocalStorageModule } from 'ngx-localstorage';

const SUB_ROUTES: Routes = [
  {
    path: '',
    component: SubComponent
  }
];

@NgModule({
  declarations: [SubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SUB_ROUTES),

    NgxLocalStorageModule.forChild()
  ]
})
export class SubModuleModule { }
