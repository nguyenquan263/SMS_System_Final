import { TestBed, inject } from '@angular/core/testing';

import { CourseEnrolledService } from './course-enrolled.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseEnrolledService]
    });
  });

  it('should be created', inject([CourseEnrolledService], (service: CourseEnrolledService) => {
    expect(service).toBeTruthy();
  }));
});