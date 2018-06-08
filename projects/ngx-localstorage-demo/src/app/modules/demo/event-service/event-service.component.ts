import {Component} from '@angular/core';
import {StorageEventService} from '../../../../../../ngx-localstorage/src/public_api';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['../base/base.scss']
})
export class EventServiceComponent {

  $events: StorageEvent[] = [];

  constructor(private es: StorageEventService) {
    this.es.stream
      .subscribe(e => {this.$events = [...this.$events, e]; console.log('events: ', this.$events)});
  }
}
