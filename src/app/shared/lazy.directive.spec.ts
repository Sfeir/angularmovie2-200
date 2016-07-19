/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Lazy } from './lazy.directive';

describe('Lazy Directive', () => {
  it('should create an instance', () => {
    let directive = new Lazy();
    expect(directive).toBeTruthy();
  });
});
