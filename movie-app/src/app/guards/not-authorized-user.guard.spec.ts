import { TestBed } from '@angular/core/testing';

import { NotAuthorizedUserGuard } from './not-authorized-user.guard';

describe('NotAuthorizedUserGuard', () => {
  let guard: NotAuthorizedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAuthorizedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
