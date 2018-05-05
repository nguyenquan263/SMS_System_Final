import { TestBed, inject } from '@angular/core/testing';

import { DropFeeService  } from './drop-fee.service';

describe('ClassInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropFeeService]
    });
  });

  it('should be created', inject([DropFeeService], (service: DropFeeService  ) => {
    expect(service).toBeTruthy();
  }));
});