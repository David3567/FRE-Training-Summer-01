import { TestBed } from '@angular/core/testing';

import { MovieResolverService } from './movie-resolver.service';

describe('MovieResolverService', () => {
  let service: MovieResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
