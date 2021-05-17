import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { NgxLocalStorageModule } from 'ngx-localstorage';

import { SubUsageComponent } from './sub-usage/sub-usage.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DirectiveComponent } from './directive/directive.component';
import { StorageServiceComponent } from './storage-service/storage-service.component';
import { EventServiceComponent } from './event-service/event-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule,

    NgxLocalStorageModule.forRoot({delimiter: '@', prefix: 'test'})
  ],
  declarations: [SubUsageComponent, DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventServiceComponent],
  exports: [SubUsageComponent, DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventServiceComponent]
})
export class DemoModule {
}
