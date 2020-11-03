import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})

export class MoviesAddComponent implements OnInit {
  invalidForm: boolean = false;
  movieForm = new FormGroup({
    name: new FormControl("", Validators.required),
    genre: new FormControl('', Validators.required),
    director: new FormControl(''),
    releasedate: new FormControl(''),
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
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string) {

  }

  ngOnInit(): void {
 
  }

  public submitMovie() {
    if (this.movieForm.valid) {
      const body = JSON.stringify(this.movieForm.value)
      this.http.post<any>(this.baseUrl + 'movies/add', body, httpOptions).subscribe(result => {
        console.log(result);
      }, error => console.error(error));
      this.movieForm.reset();
      this.router.navigate(['']);
    }
    else {
      this.invalidForm = true;
    }
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
