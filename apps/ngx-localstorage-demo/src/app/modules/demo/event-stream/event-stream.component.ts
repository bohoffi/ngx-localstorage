import { Component } from '@angular/core';

import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'app-event-stream',
  templateUrl: './event-stream.component.html',
  styleUrls: ['../base/base.scss']
})
export class EventStreamComponent {
  $events: StorageEvent[] = [];

  constructor(private readonly localstorageService: LocalStorageService) {
    this.localstorageService.subscribe(event => {
      this.$events = [...this.$events, event];
      console.log('events', this.$events);
    });
  }
}
