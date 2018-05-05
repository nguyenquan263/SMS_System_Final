import { TestBed, inject } from '@angular/core/testing';

import { StudentAASAttendanceService } from './student-aas-attendance.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentAASAttendanceService ]
    });
  });

  it('should be created', inject([StudentAASAttendanceService ], (service: StudentAASAttendanceService ) => {
    expect(service).toBeTruthy();
  }));
});