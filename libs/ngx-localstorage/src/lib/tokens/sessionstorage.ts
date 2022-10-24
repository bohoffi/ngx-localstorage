import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window';

/**
 * Provides information if sessionstorage is available.
 */
export const SESSIONSTORAGE_SUPPORT = new InjectionToken<boolean>(
  'Token providing information if sessionStorage is available',
  {
    factory: () => !!inject(SESSIONSTORAGE)
  }
);

/**
 * Provides access to sessionstorage.
 */
export const SESSIONSTORAGE = new InjectionToken<Storage>(
  'Token for accessing sessionStorage',
  {
    factory: () => inject(WINDOW).sessionStorage
  }
);
