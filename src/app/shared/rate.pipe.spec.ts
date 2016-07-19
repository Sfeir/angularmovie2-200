/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { RatePipe } from './rate.pipe';

describe('Pipe: Rate', () => {
  it('create an instance', () => {
    let pipe = new RatePipe();
    expect(pipe).toBeTruthy();
  });
});
