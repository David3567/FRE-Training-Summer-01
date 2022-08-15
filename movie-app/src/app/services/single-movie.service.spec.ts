import { TestBed } from '@angular/core/testing';

import { SingleMovieService } from './single-movie.service';

describe('SingleMovieService', () => {
  let service: SingleMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
