import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {AddMovieComponent} from '../add-movie/';

@Component({
  moduleId: module.id,
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css'],
  directives: [
    AddMovieComponent
  ]
})
export class MoviesListComponent implements OnInit {

  private movies: Array<any>;

  // access local child Component
  @ViewChild(AddMovieComponent) modal: AddMovieComponent;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.movies = [];
    this.getMovies();
  }

  getMovies() {
    this.http.get('http://localhost:9000/api/movies').map(res => res.json())
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  addMovie(movie) {
    this.http.post('http://localhost:9000/api/movies', JSON.stringify(movie), { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map(res => res.json())
      .subscribe((newMovie) => {
        this.movies.push(newMovie);
      });
  }

  deleteMovie(index, movie) {
    this.http.delete(`http://localhost:9000/api/movies/${movie.id}`)
      .subscribe((resp) => {
        this.movies.splice(index, 1);
      });
  }

  showModal() {
    this.modal.openModal();
  }

}
