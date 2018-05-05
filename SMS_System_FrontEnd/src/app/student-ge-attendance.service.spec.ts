import { TestBed, inject } from '@angular/core/testing';

import { StudentGEAttendanceService } from './student-ge-attendance.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentGEAttendanceService ]
    });
  });

  it('should be created', inject([StudentGEAttendanceService ], (service: StudentGEAttendanceService ) => {
    expect(service).toBeTruthy();
  }));
});