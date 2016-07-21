/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';

describe('Component: MoviesList', () => {
  it('should create an instance', () => {
    let component = new MoviesListComponent();
    expect(component).toBeTruthy();
  });
});
