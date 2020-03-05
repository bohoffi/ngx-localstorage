import { InjectionToken } from '@angular/core';
import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';

export const NGX_LOCAL_STORAGE_CONFIG = new InjectionToken<NgxLocalstorageConfiguration>('NgxLocalstorageConfiguration');