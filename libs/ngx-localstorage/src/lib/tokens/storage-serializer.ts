import { InjectionToken } from '@angular/core';
import { StorageSerializer } from '../interfaces/storage-serializer';

export const NGX_LOCAL_STORAGE_SERIALIZER = new InjectionToken<StorageSerializer>('StorageSerializer');