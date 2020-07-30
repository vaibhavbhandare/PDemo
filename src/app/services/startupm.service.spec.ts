import { TestBed } from '@angular/core/testing';

import { StartupmService } from './startupm.service';

describe('StartupmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupmService = TestBed.get(StartupmService);
    expect(service).toBeTruthy();
  });
});
