import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {MoviesService} from '../shared/';
import {AddMovieComponent} from '../add-movie/';

@Component({
  moduleId: module.id,
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css'],
  directives: [
    AddMovieComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [MoviesService]
})
export class MoviesListComponent implements OnInit {

  private movies: Array<any>;

  // access local child Component
  @ViewChild(AddMovieComponent) modal: AddMovieComponent;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.movies = [];
    this.getMovies();
  }

  getMovies() {
    this.moviesService.fetchMovies().subscribe((movies) => {
        this.movies = movies;
      });
  }

  addMovie(movie) {
    this.moviesService.addMovie(movie).subscribe((newMovie) => {
        this.movies.push(newMovie);
      });
  }

  deleteMovie(index, movie) {
    this.moviesService.deleteMovie(index, movie).subscribe(() => {
      this.movies.splice(index, 1);
    });
  }

  showModal() {
    this.modal.openModal();
  }

}
