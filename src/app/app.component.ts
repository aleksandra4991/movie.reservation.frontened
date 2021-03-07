import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movieService';
import { MovieSeanceSelectionService } from './movieSeanceSelectionService';
import { City } from './city';

import { Cinema } from './cinema';
import { CinemaHall } from './cinemaHall';
import { MovieSeance } from './movieSeance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public movies!: Movie[];
  public cities!: City[];
  public selectedCity!: number;
  public cinemas!: Cinema[];
  public selectedCinema!: number;
  public cinemaHalls!: CinemaHall[];
  public selectedCinemaHall!: number;
  public movieSeances!: MovieSeance[];
  public selectedMovieSeance!: number;

  constructor(private movieService: MovieService, private movieSeanceSelectionService: MovieSeanceSelectionService) {}

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.getAllMovies();
    this.movieSeanceSelectionService.getAllCities()
    .subscribe
    (
      data =>
      {
        this.cities = data;
      }
    );
  }

  public getAllMovies(): void {
    this.movieService.getAllMovies().subscribe(
      (response: Movie[]) => {
        this.movies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // tslint:disable-next-line: typedef
  public searchSpecifiedMovies(key: string): void{
    const results: Movie[] = [];
    for (const movie of this.movies) {
      if (movie.title.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
        results.push(movie);
      }
    }
    this.movies = results;
    if (results.length === 0 || !key){
        this.getAllMovies();
    }
  }

  public onCitySelected(selectedCityId: any): void{
    this.movieSeanceSelectionService.getAllCinemasOfSpecifiedCity(selectedCityId)
    .subscribe
    (
      data =>
      {
        this.cinemas = data;
      }
     );
    }

  public onCinemaSelected(selectedCinemaId: any): void{
    this.movieSeanceSelectionService.getAllCinemaHallsOfSpecifiedCinema(selectedCinemaId)
    .subscribe
    (
      data =>
      {
        this.cinemaHalls = data;
      }
    );
  }

  public onCinemaHallSelected(selectedCinemaHallId: any): void {
    this.movieSeanceSelectionService.getAllMovieSeancesOfSpecifiedCinemaHall(selectedCinemaHallId)
    .subscribe
    (
      data =>
      {
        this.movieSeances = data;
      }
    );
  }
}
