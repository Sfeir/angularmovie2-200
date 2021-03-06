import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MoviesService {

  root: string = 'http://127.0.0.1:9000/';

  constructor(
    private http: Http
  ) {}

  fetchMovies() {
    return this.http.get(`${this.root}api/movies`)
      .map(res => res.json());
  }
  getMovie(id: number) {
    return this.http.get(`${this.root}api/movies/${id}`)
      .map(res => res.json());
  }
  addMovie(movie) {
    return this.http.post(`${this.root}api/movies`, JSON.stringify(movie), { headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map(res => res.json());
  }
  updateMovie(movie) {
    return this.http.put(`${this.root}api/movies`, JSON.stringify(movie), { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }
  deleteMovie(index, movie) {
    return this.http.delete(`${this.root}api/movies/${movie.id}`);
  }
}
