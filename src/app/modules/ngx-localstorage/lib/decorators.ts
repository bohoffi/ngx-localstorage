/**
 * Created by bohoffi on 22.05.2017.
 */
import {DecoratorOpts} from './interfaces';
import {LocalStorageService, StorageEventService} from './services';

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
        const storageValue = service.get(key);
        return storageValue == null && !!options.nullTransformer ? options.nullTransformer() : storageValue;
      },
      set: function (value: any) {
        service.set(key, value)
      }
    });
  }
}
