import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './ngx-localstorage.service';
import { NGX_LOCAL_STORAGE_CONFIG } from '../tokens/storage-config';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NGX_LOCAL_STORAGE_CONFIG,
          useValue: {
            prefix: 'ngx-localstorage'
          }
        }
      ]
    });
  });

  afterEach(inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      service.clear();
    }
  ));

  it('should be created', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should be have injected config', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service.config.allowNull).toBeTruthy();
      expect(service.config.prefix).toBe('ngx-localstorage');
    }
  ));

  it('should add entries', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      let count = service.count();
      expect(count).toBe(0);

      service.set('entry', 'value');

      count = service.count();
      expect(count).toBe(1);
    }
  ));

  it('should add entries with configured prefix', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      const prefixlessKey = 'entry';

      service.set(prefixlessKey, 'value');

      const key = service.getKey(0);
      expect(key).toBe(`${service.config.prefix}_${prefixlessKey}`)
    }
  ));

  it('should remove entries', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      let count = service.count();
      expect(count).toBe(0);

      service.set('entry', 'value');

      count = service.count();
      expect(count).toBe(1);

      service.remove('entry');

      count = service.count();
      expect(count).toBe(0);
    }
  ));
});
