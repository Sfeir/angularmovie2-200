import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './+home/';
import { MoviesListComponent } from './+movies-list/';
import { EditMovieComponent } from './+edit-movie/';

const routes: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: EditMovieComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
