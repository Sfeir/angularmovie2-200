import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MovieFormComponent} from '../movie-form/';
import {MoviesService} from '../shared/';
import {RatePipe} from '../shared/';
import {Highlight} from '../shared/';
import {Lazy} from '../shared/';

@Component({
    moduleId: module.id,
    selector: 'movies-list',
    templateUrl: 'movies-list.component.html',
    styleUrls: ['movies-list.component.css'],
    providers: [MoviesService],
    pipes:[RatePipe],
    directives: [
      MovieFormComponent,
      ROUTER_DIRECTIVES,
      Highlight,
      Lazy
    ]
})
export class MoviesListComponent {
    name:string;
    movies:any;
    moviesService: MoviesService;
    lastViewDate:Date;
    displayTable:boolean;

    @ViewChild(MovieFormComponent) modal:MovieFormComponent;

    constructor(moviesService: MoviesService) {
        this.moviesService=moviesService;
        this.movies = [];
        this.lastViewDate=new Date();
        this.displayTable=false;
        this.getMovies();
    }

    getMovies(){
        this.moviesService.fetchMovies().subscribe((movies)=>{
            this.movies=movies;
        });
    }
    addMovie(movie){
        this.moviesService.addMovie(movie).subscribe((newMovie)=> {
            this.movies.push(newMovie);
        });
    }
    deleteMovie(index,movie){
        this.moviesService.deleteMovie(index,movie).subscribe(()=> {
            this.movies.splice(index, 1);
        });
    }
    switchDisplay(){
        this.displayTable=!this.displayTable;
    }
    showModal() {
      this.modal.openModal();
    }
}
