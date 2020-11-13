import { TestBed } from '@angular/core/testing';

import { QingLongService } from './qing-long.service';

describe('QingLongService', () => {
  let service: QingLongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QingLongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
