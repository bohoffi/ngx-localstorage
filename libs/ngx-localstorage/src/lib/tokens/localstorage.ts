import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window';

/**
 * Provides information if localstorage is available.
 */
export const LOCALSTORAGE_SUPPORT = new InjectionToken<boolean>(
  'Token providing information if localStorage is available',
  {
    factory: () => !!inject(LOCALSTORAGE)
  }
);

/**
 * Provides access to localstorage.
 */
export const LOCALSTORAGE = new InjectionToken<Storage>(
  'Token for accessing localStorage',
  {
    factory: () => inject(WINDOW).localStorage
  }
);
