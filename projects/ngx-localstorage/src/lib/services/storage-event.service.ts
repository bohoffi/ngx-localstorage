/**
 * Created by bohoffi on 31.01.2018.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import {filter, share} from 'rxjs/operators';

@Injectable()
export class StorageEventService {

  private _eventStream: BehaviorSubject<StorageEvent> = new BehaviorSubject<StorageEvent>(null);

  constructor() {
    fromEvent(window, 'storage')
      .subscribe((ev: StorageEvent) => this._eventStream.next(ev));
  }

  get stream(): Observable<StorageEvent> {
    return this._eventStream
      .asObservable()
      .pipe(
        filter(ev => !!ev),
        share()
      );
  }
}
