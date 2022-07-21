import { InjectionToken } from '@angular/core';
import { DefaultSerializer } from '../classes/default-serializer';
import { StorageSerializer } from '../interfaces/storage-serializer';

/**
 * Provides an injection token for the services serializer.
 */
export const NGX_LOCAL_STORAGE_SERIALIZER = new InjectionToken<StorageSerializer>(
  'StorageSerializer',
  {
    providedIn: 'root',
    factory: () => new DefaultSerializer()
  }
);
