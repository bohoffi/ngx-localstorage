/**
 * Created by HOFFM59 on 22.05.2017.
 */
import {DecoratorOpts} from './interfaces';
import {LocalStorageService} from './services/local-storage.service';

export function ngxLocalStorage(options?: DecoratorOpts) {
    return function (target: Object, propertyDescription: string) {

        const service: LocalStorageService = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });

        const key = !!options && !!options.key ? options.key : propertyDescription;

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
