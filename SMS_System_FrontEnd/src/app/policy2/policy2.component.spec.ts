import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Policy2Component } from './policy2.component';

describe('Policy2Component', () => {
  let component: Policy2Component;
  let fixture: ComponentFixture<Policy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Policy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
