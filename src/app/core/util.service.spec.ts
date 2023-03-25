import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('TimerService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
