import { TestBed } from '@angular/core/testing';

import { BbService } from './bb.service';

describe('BbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbService = TestBed.get(BbService);
    expect(service).toBeTruthy();
  });
});
