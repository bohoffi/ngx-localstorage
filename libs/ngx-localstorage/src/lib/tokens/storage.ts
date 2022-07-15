import { inject, InjectionToken } from '@angular/core';
import { LOCALSTORAGE, LOCALSTORAGE_SUPPORT } from './localstorage';
import { SESSIONSTORAGE, SESSIONSTORAGE_SUPPORT } from './sessionstorage';
import { NGX_LOCAL_STORAGE_CONFIG } from './storage-config';

export const STORAGE_SUPPORT = new InjectionToken<boolean>(
  'Token providing information is choosen storage is available',
  {
    factory: () => {
      const { storageType } = inject(NGX_LOCAL_STORAGE_CONFIG);
      return storageType === 'sessionStorage' ? inject(SESSIONSTORAGE_SUPPORT) : inject(LOCALSTORAGE_SUPPORT);
    }
  }
);

export const STORAGE = new InjectionToken<Storage>(
  'Token providing choosen storage',
  {
    factory: () => {
      const { storageType } = inject(NGX_LOCAL_STORAGE_CONFIG);
      return storageType === 'sessionStorage' ? inject(SESSIONSTORAGE) : inject(LOCALSTORAGE);
    }
  }
);
