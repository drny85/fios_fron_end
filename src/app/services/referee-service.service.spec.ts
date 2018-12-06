import { TestBed } from '@angular/core/testing';

import { RefereeServiceService } from './referee-service.service';

describe('RefereeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefereeServiceService = TestBed.get(RefereeServiceService);
    expect(service).toBeTruthy();
  });
});
