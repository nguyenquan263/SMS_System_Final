import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslSeoiValuationComponent } from './esl-seoi-valuation.component';

describe('EslSeoiValuationComponent', () => {
  let component: EslSeoiValuationComponent;
  let fixture: ComponentFixture<EslSeoiValuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslSeoiValuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslSeoiValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
