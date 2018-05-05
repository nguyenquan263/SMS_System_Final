import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProhibitedComponent } from './student-prohibited.component';

describe('StudentProhibitedComponent', () => {
  let component: StudentProhibitedComponent;
  let fixture: ComponentFixture<StudentProhibitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProhibitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProhibitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
