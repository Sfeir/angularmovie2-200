import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { HomeComponent } from './home/';
// import { MoviesListComponent } from './movies-list/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [
    // HomeComponent,
    // MoviesListComponent
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {}
