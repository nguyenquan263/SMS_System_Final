import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasSeoiComponent } from './aas-seoi.component';

describe('AasSeoiComponent', () => {
  let component: AasSeoiComponent;
  let fixture: ComponentFixture<AasSeoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasSeoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasSeoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
