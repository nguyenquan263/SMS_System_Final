import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslSeoiListingComponent } from './esl-seoi-listing.component';

describe('EslSeoiListingComponent', () => {
  let component: EslSeoiListingComponent;
  let fixture: ComponentFixture<EslSeoiListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslSeoiListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslSeoiListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
