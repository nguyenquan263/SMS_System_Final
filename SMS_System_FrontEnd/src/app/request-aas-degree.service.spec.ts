import { TestBed, inject } from '@angular/core/testing';

import { RequestAasDegreeService } from './request-aas-degree.service';

describe('RequestAasDegreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestAasDegreeService]
    });
  });

  it('should be created', inject([RequestAasDegreeService], (service: RequestAasDegreeService) => {
    expect(service).toBeTruthy();
  }));
});
