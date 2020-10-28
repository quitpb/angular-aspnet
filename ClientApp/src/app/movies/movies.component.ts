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
    this.baseUrl = baseUrl;
    http.get<Movies[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));


  }
  public addMovie() {
    this.clickMessage = "YOU CLICKED ME " + this.baseUrl;
    this.http.get('https://localhost:44378/movies/add').subscribe(error => console.error(error));
    //this.http.get<Movies[]>(this.baseUrl + 'movies').subscribe(result => {
      //this.movies = result;
    //}, error => console.error(error));
  }

}

interface Movies {
  name: string;
  genre: string;
  description: string;
  director: string;
  releasedate: Date; 
}
