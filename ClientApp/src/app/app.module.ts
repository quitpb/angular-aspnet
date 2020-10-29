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
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MoviesComponent } from './movies/display-all/movies.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'display-movies', component: MoviesComponent },
      { path: 'movies/add', component: MoviesAddComponent },
      { path: 'movies/edit', component: MoviesEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
