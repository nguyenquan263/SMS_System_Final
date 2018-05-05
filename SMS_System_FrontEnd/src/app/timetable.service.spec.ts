import { TestBed, inject } from '@angular/core/testing';

import { TimetableService } from './timetable.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableService]
    });
  });

  it('should be created', inject([TimetableService], (service: TimetableService ) => {
    expect(service).toBeTruthy();
  }));
});