import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-movie',
  templateUrl: 'add-movie.component.html',
  styleUrls: ['add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  private isOpen: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
  }

}
