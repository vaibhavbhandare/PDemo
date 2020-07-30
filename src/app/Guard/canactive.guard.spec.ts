import { TestBed, async, inject } from '@angular/core/testing';

import { CanactiveGuard } from './canactive.guard';

describe('CanactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactiveGuard]
    });
  });

  it('should ...', inject([CanactiveGuard], (guard: CanactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
