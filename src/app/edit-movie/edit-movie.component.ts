import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-edit-movie',
  templateUrl: 'edit-movie.component.html',
  styleUrls: ['edit-movie.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class EditMovieComponent implements OnInit {

  private id: number = 0;
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

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
      });
  }
  editMovie() {
    this.http.put('http://localhost:9000/api/movies', JSON.stringify(this.movie), { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .subscribe(() => {
        this.router.navigate(['/movies']);
      });
  }

}
