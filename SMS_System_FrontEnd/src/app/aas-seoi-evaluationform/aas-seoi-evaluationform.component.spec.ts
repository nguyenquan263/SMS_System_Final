import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasSeoiEvaluationformComponent } from './aas-seoi-evaluationform.component';

describe('AasSeoiEvaluationformComponent', () => {
  let component: AasSeoiEvaluationformComponent;
  let fixture: ComponentFixture<AasSeoiEvaluationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasSeoiEvaluationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasSeoiEvaluationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
