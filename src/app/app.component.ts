import { Component } from '@angular/core';
import { HomeComponent } from './home/';
import { MoviesListComponent } from './movies-list/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HomeComponent, MoviesListComponent]
})
export class AppComponent {}
