import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAndSemesterComponent } from './grade-and-semester.component';

describe('GradeAndSemesterComponent', () => {
  let component: GradeAndSemesterComponent;
  let fixture: ComponentFixture<GradeAndSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeAndSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAndSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
