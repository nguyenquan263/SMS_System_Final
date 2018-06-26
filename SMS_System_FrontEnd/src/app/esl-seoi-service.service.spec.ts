import { TestBed, inject } from '@angular/core/testing';

import { EslSeoiServiceService } from './esl-seoi-service.service';

describe('EslSeoiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EslSeoiServiceService]
    });
  });

  it('should be created', inject([EslSeoiServiceService], (service: EslSeoiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
