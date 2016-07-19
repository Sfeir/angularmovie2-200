import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {MoviesService} from '../shared/';
import {AddMovieComponent} from '../add-movie/';
import {RatePipe} from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css'],
  pipes: [RatePipe],
  directives: [
    AddMovieComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [MoviesService]
})
export class MoviesListComponent implements OnInit {

  private movies: Array<any>;
  private lastViewDate: Date;
  private displayTable: boolean;

  // access local child Component
  @ViewChild(AddMovieComponent) modal: AddMovieComponent;

  constructor(
    private moviesService: MoviesService
  ) {
    this.lastViewDate = new Date();
    this.displayTable = false;
  }

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

  switchDisplay() {
    this.displayTable = !this.displayTable;
  }

  showModal() {
    this.modal.openModal();
  }

}
