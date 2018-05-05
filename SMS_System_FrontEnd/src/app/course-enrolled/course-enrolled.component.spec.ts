import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrolledComponent } from './course-enrolled.component';

describe('CourseEnrolledComponent', () => {
  let component: CourseEnrolledComponent;
  let fixture: ComponentFixture<CourseEnrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
