import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { NgxLocalStorageModule } from 'ngx-localstorage';

import { SubUsageComponent } from './sub-usage/sub-usage.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DirectiveComponent } from './directive/directive.component';
import { StorageServiceComponent } from './storage-service/storage-service.component';
import { EventStreamComponent } from './event-stream/event-stream.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule,

    NgxLocalStorageModule.forRoot({ delimiter: '@', prefix: 'test' }),
    MarkdownModule.forChild()
  ],
  declarations: [SubUsageComponent, DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventStreamComponent],
  exports: [SubUsageComponent, DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventStreamComponent]
})
export class DemoModule {
}
