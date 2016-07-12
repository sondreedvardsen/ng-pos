/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe('Settings Service', () => {
  beforeEachProviders(() => [SettingsService]);

  it('should ...',
      inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
