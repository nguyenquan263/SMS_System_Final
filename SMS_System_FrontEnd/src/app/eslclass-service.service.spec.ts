import { TestBed, inject } from '@angular/core/testing';

import { EslclassServiceService } from './eslclass-service.service';

describe('EslclassServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EslclassServiceService]
    });
  });

  it('should be created', inject([EslclassServiceService], (service: EslclassServiceService) => {
    expect(service).toBeTruthy();
  }));
});
