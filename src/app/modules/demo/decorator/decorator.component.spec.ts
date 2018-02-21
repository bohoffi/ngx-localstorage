import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DecoratorComponent} from './decorator.component';
import {MatCardModule} from '@angular/material';

describe('DecoratorComponent', () => {
  let component: DecoratorComponent;
  let fixture: ComponentFixture<DecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecoratorComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
