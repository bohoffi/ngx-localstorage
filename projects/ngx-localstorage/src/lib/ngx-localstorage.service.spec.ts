import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './ngx-localstorage.service';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LocalStorageService] });
  });

  it('should be created', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
