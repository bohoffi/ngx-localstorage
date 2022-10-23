import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventServiceComponent } from './event-service.component';
import {NgxLocalStorageModule} from '../../ngx-localstorage/ngx-localstorage.module';
import { MatCardModule } from '@angular/material/card';

describe('EventServiceComponent', () => {
  let component: EventServiceComponent;
  let fixture: ComponentFixture<EventServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventServiceComponent ],
      imports: [MatCardModule, NgxLocalStorageModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
