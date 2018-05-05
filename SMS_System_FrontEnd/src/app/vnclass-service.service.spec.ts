import { TestBed, inject } from '@angular/core/testing';

import { VnclassServiceService } from './vnclass-service.service';

describe('VnclassServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VnclassServiceService]
    });
  });

  it('should be created', inject([VnclassServiceService], (service: VnclassServiceService) => {
    expect(service).toBeTruthy();
  }));
});
