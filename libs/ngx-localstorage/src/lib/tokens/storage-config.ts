import { InjectionToken } from '@angular/core';
import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';

export const NGX_LOCAL_STORAGE_DEFAULT_CONFIG = (): NgxLocalstorageConfiguration => {
  return {
    allowNull: true,
    storage: localStorage,
    delimiter: '_'
  }
};

/**
 * Provides an injection token for the service configuration.
 */
export const NGX_LOCAL_STORAGE_CONFIG = new InjectionToken<NgxLocalstorageConfiguration>('NgxLocalstorageConfiguration', {
  providedIn: 'root',
  factory: NGX_LOCAL_STORAGE_DEFAULT_CONFIG
});
