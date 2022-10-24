import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { NgxLocalstorageDirectiveModule } from 'ngx-localstorage';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownModule } from 'ngx-markdown';


const routes: Routes = [
  { path: '', component: LazyComponent }
];

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    NgxLocalstorageDirectiveModule,

    MarkdownModule.forChild(),

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
  ]
})
export class LazyModule { }
