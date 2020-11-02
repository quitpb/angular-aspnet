import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  public baseUrl;
  public movies: Movies[];
  public filteredMovies: Movies[];
  public searchText: string;

  query = new FormGroup({
    name: new FormControl(""),
  });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    http.get<Movies[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
      this.filteredMovies = result;
    }, error => console.error(error));
  }

  public addMovie() {
    this.http.get(this.baseUrl + 'movies/add', { observe: 'response' }).subscribe();
  }

  public async deleteMovie(movieId: string) {
    var body = JSON.stringify(this.movies.find(e => e.id == movieId))
    await this.http.post<any>(this.baseUrl + 'movies/delete/' + movieId, body, this.httpOptions).subscribe(result => {
      this.movies = result;
      if (this.searchText) {
        this.filterMovies(this.searchText)
      }
      else {
        this.filteredMovies = result
      }
      console.log(result);
    }, error => console.error(error));
  }

  public filterMovies(query: string) {
     this.filteredMovies = this.movies.filter(movie => movie.name.includes(query));
  }




  

}

interface Movies {
  id: string;
  name: string;
  genre: string;
  description: string;
  director: string;
  releasedate: string; 
}
