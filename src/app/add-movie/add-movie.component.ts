import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-movie',
  templateUrl: 'add-movie.component.html',
  styleUrls: ['add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Object = {};
  private isOpen: boolean = false;

  @Output() movieAdd: EventEmitter<any>;

  constructor() {
    this.movieAdd = new EventEmitter();
  }

  ngOnInit() {
  }

  addMovie() {
    this.movieAdd.emit(this.movie);
    this.movie = {};
    this.closeModal();
  }

  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
  }

}
