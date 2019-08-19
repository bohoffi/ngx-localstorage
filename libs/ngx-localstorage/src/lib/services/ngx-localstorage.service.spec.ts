import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './ngx-localstorage.service';
import { NgxLocalstorageConfigurationToken } from '../token';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgxLocalstorageConfigurationToken,
          useValue: {}
        },
        LocalStorageService
      ]
    });
  });

  it('should be created', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
