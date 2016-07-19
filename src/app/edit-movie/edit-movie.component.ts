import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-edit-movie',
  templateUrl: 'edit-movie.component.html',
  styleUrls: ['edit-movie.component.css'],
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class EditMovieComponent implements OnInit {

  private id: number = 0;
  movie: any = {};
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private builder: FormBuilder
  ) {
    this.editForm = builder.group({
      title: ['', Validators.required],
      releaseYear: ['', Validators.required],
      directors: [''],
      actors: [''],
      rate: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getMovie(this.id);
    });
  }

  getMovie(id: number) {
    this.http.get('http://localhost:9000/api/movies/' + id)
      .map(res => res.json())
      .subscribe((movie) => {
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

    this.http.put('http://localhost:9000/api/movies', JSON.stringify(this.movie), { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .subscribe(() => {
        this.router.navigate(['/movies']);
      });
  }

}
