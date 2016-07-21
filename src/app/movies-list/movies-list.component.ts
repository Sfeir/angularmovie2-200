import { Component, OnInit, ViewChild } from '@angular/core';
import {AddMovieComponent} from '../add-movie/';
import { Http } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css'],
  directives: [
    AddMovieComponent,
    ROUTER_DIRECTIVES
  ]
})
export class MoviesListComponent implements OnInit {

  private movies: Array<any>;

  // access local child Component
  @ViewChild(AddMovieComponent) modal: AddMovieComponent;

  constructor(
    private http: Http
  ) {
    this.movies = [];
  }

  ngOnInit() {
    this.http
      .get('http://localhost:9000/api/movies')
      .map( res => res.json() )
      .subscribe( data => this.movies = data );
  }

  addMovie(movie) {
    console.log('clicked', movie);
    this.movies.push(movie);
  }

  deleteMovie(movie, index) {
    this.http
      .delete(`http://localhost:9000/api/movies/${movie.id}`)
      .subscribe( _ => this.movies.splice(index, 1) );
  }

  showModal() {
    this.modal.openModal();
  }

}
