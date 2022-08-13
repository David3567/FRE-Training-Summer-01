import { TestBed } from '@angular/core/testing';

import { FakeProductService } from './fake-product.service';

describe('FakeProductService', () => {
  let service: FakeProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
