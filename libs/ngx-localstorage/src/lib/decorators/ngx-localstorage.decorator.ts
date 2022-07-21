import { filter } from 'rxjs/operators';
import { DefaultSerializer } from '../classes/default-serializer';
import { DecoratorOpts } from '../interfaces/decorator-options';
import { LocalStorageService } from '../services/ngx-localstorage.service';
import { constructKey } from '../utils/key-utils';

/**
 * Provides a decoarator to bind a property directly to a storage value.
 * @param options configuration used for the decoarator
 */
export function ngxLocalStorage(options?: DecoratorOpts) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (target: Object, propertyDescription: string) {

    const key = !!options && !!options.key ? options.key : propertyDescription;
    const prefix = !!options && !!options.prefix ? options.prefix : undefined;
    const storage = options?.storageType === 'localStorage' ? window?.localStorage : window?.sessionStorage;

    const service: LocalStorageService = new LocalStorageService(
      options?.serializer || new DefaultSerializer(),
      !!storage,
      {
        prefix: prefix,
        storageType: options?.storageType
      },
      storage,
      window);


    service.pipe(
      filter((ev: StorageEvent) => !!ev.key && ev.key.indexOf(constructKey(key, prefix)) >= 0)
    )
      .subscribe((ev: StorageEvent) => {
        if (!!ev.newValue && typeof ev.newValue === 'string') {
          if (ev.newValue !== 'null') {
            (target as any)[propertyDescription] = ev.newValue;



          } else {
            (target as any)[propertyDescription] = options?.nullTransformer ? options.nullTransformer() : null;
          }
        }
      });

    Object.defineProperty(target, propertyDescription, {
      get: function () {
        const storageValue = service.get(key, prefix);
        return storageValue == null && !!options?.nullTransformer ? options.nullTransformer() : storageValue;
      },
      set: function (value: any) {
        service.set(key, value, prefix);
      }
    });
  };
}
