import { TestBed, inject } from '@angular/core/testing';

import { StudentInfoforRegistrationService } from './student-infofor-registration.service';

describe('StudentInfoforRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentInfoforRegistrationService]
    });
  });

  it('should be created', inject([StudentInfoforRegistrationService], (service: StudentInfoforRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
