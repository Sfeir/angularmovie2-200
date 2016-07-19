/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MoviesService } from './movies.service';

describe('Movies Service', () => {
  beforeEachProviders(() => [MoviesService]);

  it('should ...',
      inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
