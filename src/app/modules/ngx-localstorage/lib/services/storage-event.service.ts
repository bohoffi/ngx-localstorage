/**
 * Created by bohoffi on 31.01.2018.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';

@Injectable()
export class StorageEventService {

  private _eventStream: BehaviorSubject<StorageEvent> = new BehaviorSubject<StorageEvent>(null);

  constructor() {
    Observable.fromEvent(window, 'storage')
      .subscribe((ev: StorageEvent) => this._eventStream.next(ev));
  }

  get stream(): Observable<StorageEvent> {
    return this._eventStream
      .asObservable()
      .filter(ev => !!ev)
      .share();
  }
}
