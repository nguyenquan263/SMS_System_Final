import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnRegistrationComponent } from './vn-registration.component';

describe('VnRegistrationComponent', () => {
  let component: VnRegistrationComponent;
  let fixture: ComponentFixture<VnRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
