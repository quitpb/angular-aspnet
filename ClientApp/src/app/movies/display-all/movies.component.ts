import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  
  public baseUrl;
  public movies: Movies[];
  public clickMessage = '';
 

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movies[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }

  public addMovie() {
    this.http.get(this.baseUrl + 'movies/add', { observe: 'response' }).subscribe();
  }

  public deleteMovie(movieTitle: string) {
    console.log("YOU DEL:" + movieTitle)
    this.http.get(this.baseUrl + 'movies/add', { observe: 'response' }).subscribe();
  }

}

interface Movies {
  name: string;
  genre: string;
  description: string;
  director: string;
  releasedate: Date; 
}
