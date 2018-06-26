import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSeoiComponent } from './other-seoi.component';

describe('OtherSeoiComponent', () => {
  let component: OtherSeoiComponent;
  let fixture: ComponentFixture<OtherSeoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSeoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSeoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
