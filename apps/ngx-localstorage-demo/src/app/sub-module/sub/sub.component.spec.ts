import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubComponent } from './sub.component';

describe('SubComponent', () => {
  let component: SubComponent;
  let fixture: ComponentFixture<SubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
