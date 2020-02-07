import { TestBed } from '@angular/core/testing';

import { FbserviceService } from './fbservice.service';

describe('FbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbserviceService = TestBed.get(FbserviceService);
    expect(service).toBeTruthy();
  });
});
