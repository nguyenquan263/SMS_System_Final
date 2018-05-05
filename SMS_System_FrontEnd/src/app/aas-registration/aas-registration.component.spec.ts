import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasRegistrationComponent } from './aas-registration.component';

describe('AasRegistrationComponent', () => {
  let component: AasRegistrationComponent;
  let fixture: ComponentFixture<AasRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
