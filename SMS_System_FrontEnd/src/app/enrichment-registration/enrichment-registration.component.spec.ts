import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichmentRegistrationComponent } from './enrichment-registration.component';

describe('EnrichmentRegistrationComponent', () => {
  let component: EnrichmentRegistrationComponent;
  let fixture: ComponentFixture<EnrichmentRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichmentRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
