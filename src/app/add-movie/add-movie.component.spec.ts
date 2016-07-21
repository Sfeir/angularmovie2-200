/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddMovieComponent } from './add-movie.component';

describe('Component: AddMovie', () => {
  it('should create an instance', () => {
    let component = new AddMovieComponent();
    expect(component).toBeTruthy();
  });
});
