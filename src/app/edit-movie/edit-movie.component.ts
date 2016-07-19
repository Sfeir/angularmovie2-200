import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {MoviesService} from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'app-edit-movie',
  templateUrl: 'edit-movie.component.html',
  styleUrls: ['edit-movie.component.css'],
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [MoviesService]
})
export class EditMovieComponent implements OnInit {

  private id: number = 0;
  movie: any = {};
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private builder: FormBuilder,
    private moviesService: MoviesService
  ) {
    this.editForm = builder.group({
      title: ['', Validators.required],
      releaseYear: ['', Validators.required],
      directors: [''],
      actors: [''],
      rate: ['', this.getRangeNumberValidator(1, 5)]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getMovie(this.id);
    });
  }

  getMovie(id: number) {
    this.moviesService.getMovie(this.id).subscribe((movie) => {
      this.movie = movie;
      (<FormControl>this.editForm.controls['title']).updateValue(this.movie.title);
      (<FormControl>this.editForm.controls['releaseYear']).updateValue(this.movie.releaseYear);
      (<FormControl>this.editForm.controls['directors']).updateValue(this.movie.directors);
      (<FormControl>this.editForm.controls['actors']).updateValue(this.movie.actors);
      (<FormControl>this.editForm.controls['rate']).updateValue(this.movie.rate);
    });
  }
  editMovie() {
    this.movie.title = this.editForm.value.title;
    this.movie.releaseYear = this.editForm.value.releaseYear;
    this.movie.directors = this.editForm.value.directors;
    this.movie.actors = this.editForm.value.actors;
    this.movie.rate = this.editForm.value.rate;

    this.moviesService.updateMovie(this.movie)
      .subscribe(() => {
        this.router.navigate(['/movies']);
      });
  }

  getRangeNumberValidator(min, max) {
    return (c: FormControl): any => {
      if (c.value || c.value == 0) {
        let val = parseInt(c.value);
        //it's a number ?
        if (isNaN(val)) {
          return {
            number: true
          }
        }
        //it's higher than min
        if (val < min) {
          return {
            min: true
          }
        }
        //it's lower than max
        if (val > max) {
          return {
            max: true
          }
        }
      }
      // Null means valid
      return null
    };
  }

}
