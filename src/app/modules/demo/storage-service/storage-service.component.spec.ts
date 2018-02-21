import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageServiceComponent } from './storage-service.component';
import {MatCardModule} from '@angular/material';
import {NgxLocalStorageModule} from '../../ngx-localstorage/ngx-localstorage.module';

describe('StorageServiceComponent', () => {
  let component: StorageServiceComponent;
  let fixture: ComponentFixture<StorageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageServiceComponent ],
      imports: [MatCardModule, NgxLocalStorageModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
