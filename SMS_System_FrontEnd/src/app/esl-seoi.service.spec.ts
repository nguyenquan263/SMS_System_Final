import { TestBed, inject } from '@angular/core/testing';

import { EslSeoiService } from './esl-seoi.service';

describe('EslSeoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EslSeoiService]
    });
  });

  it('should be created', inject([EslSeoiService], (service: EslSeoiService) => {
    expect(service).toBeTruthy();
  }));
});
