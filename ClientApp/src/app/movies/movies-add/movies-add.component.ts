import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})

export class MoviesAddComponent implements OnInit {
  movieForm = new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    director: new FormControl(''),
    release: new FormControl(''),
    description: new FormControl(''),
  });


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
   };

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {

  }

  ngOnInit(): void {
 
  }

  public submitMovie() {
    const body = JSON.stringify(this.movieForm.value)
    this.http.post<any>(this.baseUrl + 'movies/add', body, httpOptions).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
    
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};


interface Food {
  value: string;
  viewValue: string;
}
