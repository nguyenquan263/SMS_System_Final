import { TestBed, inject } from '@angular/core/testing';

import { ClassStatusService } from './class-status.service';

describe('ClassStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassStatusService]
    });
  });

  it('should be created', inject([ClassStatusService], (service: ClassStatusService) => {
    expect(service).toBeTruthy();
  }));
});
