import { TestBed, inject } from '@angular/core/testing';

import { SemesterInformationService } from './semester-info.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterInformationService]
    });
  });

  it('should be created', inject([SemesterInformationService], (service: SemesterInformationService) => {
    expect(service).toBeTruthy();
  }));
});
