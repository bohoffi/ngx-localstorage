import { StorageSerializer } from './storage-serializer';

/**
 * Options passed for reading / writing from / to storage.
 */
export interface ServiceOptions {
  /**
   * Prefix to overwrite the configured one.
   */
  prefix?: string;
  /**
   * Serializer to overwrite the configured one.
   */
  serializer?: StorageSerializer;
}
