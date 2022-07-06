import { InjectionToken } from '@angular/core';
import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';

/**
 * Provides an injection token for the service configuration.
 */
export const NGX_LOCAL_STORAGE_CONFIG = new InjectionToken<NgxLocalstorageConfiguration>('NgxLocalstorageConfiguration');