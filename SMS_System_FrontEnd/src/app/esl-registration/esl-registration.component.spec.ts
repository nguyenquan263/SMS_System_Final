import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslRegistrationComponent } from './esl-registration.component';

describe('EslRegistrationComponent', () => {
  let component: EslRegistrationComponent;
  let fixture: ComponentFixture<EslRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
