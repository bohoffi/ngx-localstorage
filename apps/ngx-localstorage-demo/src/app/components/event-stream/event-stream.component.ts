import { Component } from '@angular/core';

import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'ngx-localstorage-event-stream',
  templateUrl: './event-stream.component.html',
  styles: []
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
