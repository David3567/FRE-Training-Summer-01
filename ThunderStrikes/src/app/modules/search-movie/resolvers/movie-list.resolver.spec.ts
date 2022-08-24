import { TestBed } from '@angular/core/testing';

import { MovieListResolver } from './movie-list.resolver';

describe('MovieListResolver', () => {
  let resolver: MovieListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MovieListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
