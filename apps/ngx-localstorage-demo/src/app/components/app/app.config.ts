import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import {
  provideNgDocApp,
  provideSearchEngine,
  NgDocDefaultSearchEngine,
  providePageSkeleton,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  provideMainPageProcessor,
  NG_DOC_DEFAULT_PAGE_PROCESSORS
} from '@ng-doc/app';
import { NG_DOC_ROUTING, provideNgDocContext } from '@ng-doc/generated';
import { provideNgxLocalstorage } from 'ngx-localstorage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgDocContext(),
    provideNgDocApp({ defaultThemeId: 'auto' }),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideRouter(
      NG_DOC_ROUTING,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withViewTransitions()
    ),

    provideNgxLocalstorage({
      delimiter: '@',
      prefix: 'test'
    })
  ]
};
