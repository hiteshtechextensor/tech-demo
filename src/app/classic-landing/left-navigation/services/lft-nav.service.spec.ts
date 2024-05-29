import { TestBed } from '@angular/core/testing';

import { LftNavService } from './lft-nav.service';

describe('LftNavService', () => {
  let service: LftNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LftNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
