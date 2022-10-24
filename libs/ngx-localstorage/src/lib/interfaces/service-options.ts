import { NgxLocalstorageConfiguration } from './storage-configuration';
import { StorageSerializer } from './storage-serializer';

/**
 * Options passed for reading / writing from / to storage.
 */
export interface ServiceOptions extends Pick<NgxLocalstorageConfiguration, 'prefix'> {
  /**
   * Serializer to overwrite the configured one.
   */
  serializer?: StorageSerializer;
}
