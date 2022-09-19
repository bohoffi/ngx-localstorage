import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStreamComponent } from './event-stream.component';
import { MatCardModule } from '@angular/material/card';
import { NgxLocalStorageModule } from 'ngx-localstorage';

describe('EventServiceComponent', () => {
  let component: EventStreamComponent;
  let fixture: ComponentFixture<EventStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventStreamComponent],
      imports: [MatCardModule, NgxLocalStorageModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
