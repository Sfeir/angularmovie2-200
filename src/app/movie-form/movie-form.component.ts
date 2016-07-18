import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'movie-form',
    templateUrl: 'movie-form.component.html',
    styleUrls: ['movie-form.component.css']
})
export class MovieFormComponent {
    movie:Object;
    @Output() movieAdd: EventEmitter<any>;

    @ViewChild('modal') modal;

    constructor() {
        this.movieAdd = new EventEmitter();
        this.movie = {};
    }

    addMovie(){
        this.movieAdd.emit(this.movie);
        this.movie = {};
        this.closeModal();
    }
    openModal() {
      this.modal.nativeElement.classList.remove('hide');
      this.modal.nativeElement.classList.add('in');
    }
    closeModal() {
      this.modal.nativeElement.classList.add('hide');
      this.modal.nativeElement.classList.remove('in');
    }
}
