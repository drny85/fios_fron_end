import { TestBed, async, inject } from '@angular/core/testing';

import { CoachGuard } from './coach.guard';

describe('CoachGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachGuard]
    });
  });

  it('should ...', inject([CoachGuard], (guard: CoachGuard) => {
    expect(guard).toBeTruthy();
  }));
});
