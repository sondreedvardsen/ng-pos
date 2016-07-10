/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PricePipe } from './price.pipe';

describe('Pipe: Price', () => {
  it('create an instance', () => {
    let pipe = new PricePipe();
    expect(pipe).toBeTruthy();
  });
});
