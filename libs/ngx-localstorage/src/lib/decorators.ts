import { filter } from 'rxjs/operators';

import { DecoratorOpts } from './interfaces/decorator-options';
import { LocalStorageService } from './services/ngx-localstorage.service';
import { StorageEventService } from './services/storage-event.service';

export function ngxLocalStorage(options?: DecoratorOpts) {
  return function (target: Object, propertyDescription: string) {

    const key = !!options && !!options.key ? options.key : propertyDescription;
    const prefix = !!options && !!options.prefix ? options.prefix : null;

    const service: LocalStorageService = new LocalStorageService({
      prefix: prefix
    });


    const eventService: StorageEventService = new StorageEventService();
    eventService.stream.pipe(
      // TODO: filter should be more accurate
      filter((ev: StorageEvent) => ev.key && ev.key.indexOf(constructKey(key, prefix)) >= 0)
    )
      .subscribe((ev: StorageEvent) => {
        if (!!ev.newValue && typeof ev.newValue === 'string') {
          if (ev.newValue !== 'null') {
            target[propertyDescription] = ev.newValue;
          } else {
            target[propertyDescription] = !!options.nullTransformer ? options.nullTransformer() : null;
          }
        }
      });

    Object.defineProperty(target, propertyDescription, {
      get: function () {
        const storageValue = service.get(key, prefix);
        return storageValue == null && !!options.nullTransformer ? options.nullTransformer() : storageValue;
      },
      set: function (value: any) {
        service.set(key, value, prefix);
      }
    });
  };
}

function constructKey(key: string, prefix?: string): string {
  if (prefix) {
    return `${prefix}_${key}`;
  }
  return key;
}
