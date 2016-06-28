/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('Products Service', () => {
  beforeEachProviders(() => [ProductsService]);

  it('should ...',
      inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
