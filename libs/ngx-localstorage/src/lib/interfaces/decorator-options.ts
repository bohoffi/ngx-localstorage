import { NgxLocalstorageConfiguration } from './storage-configuration';

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
}
