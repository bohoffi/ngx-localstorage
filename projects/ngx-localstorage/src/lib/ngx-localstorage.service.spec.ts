import { TestBed, inject } from '@angular/core/testing';

import { NgxLocalstorageService } from './ngx-localstorage.service';

describe('NgxLocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLocalstorageService]
    });
  });

  it('should be created', inject([NgxLocalstorageService], (service: NgxLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
