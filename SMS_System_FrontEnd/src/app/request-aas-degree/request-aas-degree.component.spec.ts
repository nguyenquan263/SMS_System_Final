import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAasDegreeComponent } from './request-aas-degree.component';

describe('RequestAasDegreeComponent', () => {
  let component: RequestAasDegreeComponent;
  let fixture: ComponentFixture<RequestAasDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAasDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAasDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
