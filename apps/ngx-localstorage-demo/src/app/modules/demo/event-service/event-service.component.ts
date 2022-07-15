import { Component } from '@angular/core';

import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['../base/base.scss']
})
export class EventServiceComponent {
  $events: StorageEvent[] = [];

  constructor(private readonly localstorageService: LocalStorageService) {
    this.localstorageService.subscribe(event => {
      this.$events = [...this.$events, event];
      console.log('events', this.$events);
    });
  }
}
