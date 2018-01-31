/**
* Created by HOFFM59 on 22.05.2017.
*/
import {DecoratorOpts} from './interfaces';
import {LocalStorageService} from './services/local-storage.service';
import {StorageEventService} from './services/storage-event.service';

export function ngxLocalStorage(options?: DecoratorOpts) {
  return function (target: Object, propertyDescription: string) {

    const service: LocalStorageService = new LocalStorageService({
      prefix: !!options && !!options.prefix ? options.prefix : ''
    });

    const key = !!options && !!options.key ? options.key : propertyDescription;

    const eventService: StorageEventService = new StorageEventService();
    eventService.stream
      // TODO: filter should be more accurate
      .filter((ev: StorageEvent) => ev.key.indexOf(key) >= 0)
      .subscribe((ev: StorageEvent) => {
        //target[propertyDescription] = ev.newValue;
        if (!!ev.newValue && typeof ev.newValue === 'string') {
          if (ev.newValue !== 'null') {
            //setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this._element.nativeElement);
            target[propertyDescription] = ev.newValue;
          } else {
            //setProperty(this._valuePath.length ? this._valuePath : ['value'], '', this._element.nativeElement);
            target[propertyDescription] = '';
          }
        }
      });

    Object.defineProperty(target, propertyDescription, {
      get: function () {
        return service.get(key);
      },
      set: function (value: any) {
        service.set(key, value)
      }
    });
  }
}
