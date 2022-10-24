import { StorageType } from '../types/storage-type';

/**
 * Provides the configuration used by the service and directive.
 */
export interface NgxLocalstorageConfiguration {
  /**
   * Determines the key prefix. (Default: null)
   */
  prefix?: string;
  /**
   * Determines if null | 'null' values should be stored. (Default: true)
   */
  allowNull?: boolean;
  /**
   * Determines the storage type. (Default: localStorage)
   */
  storageType?: StorageType
  /**
   * Determines the delimiter, will used befoure key. (Default: _)
   */
  delimiter?: string
}
