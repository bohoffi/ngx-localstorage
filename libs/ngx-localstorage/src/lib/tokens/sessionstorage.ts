import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window';

export const SESSIONSTORAGE_SUPPORT = new InjectionToken<boolean>(
  'Token providing information if sessionStorage is available',
  {
    factory: () => !!inject(SESSIONSTORAGE)
  }
);

export const SESSIONSTORAGE = new InjectionToken<Storage>(
  'Token for accessing sessionStorage',
  {
    factory: () => inject(WINDOW).sessionStorage
  }
);
