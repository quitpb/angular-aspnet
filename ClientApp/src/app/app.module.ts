import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule, MatInputModule, MatOptionModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MoviesComponent } from './movies/display-all/movies.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MoviesComponent,
    MoviesAddComponent,
    MoviesEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatOptionModule,
    MatDatepickerModule, BrowserAnimationsModule, MatButtonModule,
    MatNativeDateModule, MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
      { path: 'movies/add-movie', component: MoviesAddComponent },
      { path: 'movies/edit-movie', component: MoviesEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
