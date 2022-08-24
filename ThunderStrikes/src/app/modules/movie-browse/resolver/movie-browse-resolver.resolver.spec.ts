import { TestBed } from '@angular/core/testing';

import { MovieBrowseResolverResolver } from './movie-browse-resolver.resolver';

describe('MovieBrowseResolverResolver', () => {
  let resolver: MovieBrowseResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MovieBrowseResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
