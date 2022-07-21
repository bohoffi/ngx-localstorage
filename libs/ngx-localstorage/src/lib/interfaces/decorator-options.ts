import { NgxLocalstorageConfiguration } from './storage-configuration';
import { StorageSerializer } from './storage-serializer';

/**
 * Defines the configuration of the {@link ngxLocalStorage} decorator.
 */
export interface DecoratorOpts extends Pick<NgxLocalstorageConfiguration, 'prefix' | 'storageType'> {
  /**
   * The key to use with localstorage.
   */
  key?: string;
  /**
   * An optional transformer to handle 'null' values.
   */
  nullTransformer?: () => any;

  /**
   * *Optional* Serializer to transform and parse values.
   * Defaults to `DefaultSerializer`
   */
  serializer?: StorageSerializer;
}
