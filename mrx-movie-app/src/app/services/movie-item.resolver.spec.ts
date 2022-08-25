import { TestBed } from '@angular/core/testing';

import { MovieItemResolver } from './movie-item.resolver';

describe('MovieItemResolver', () => {
  let resolver: MovieItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MovieItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
