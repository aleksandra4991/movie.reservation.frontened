import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { City } from './city';
import { Cinema } from './cinema';
import { CinemaHall } from './cinemaHall';
import { MovieSeance } from './movieSeance';

@Injectable({providedIn: 'root'})
export class MovieSeanceSelectionService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {  }

    public getAllCities(): Observable<City[]> {
        return this.http.get<City[]>(`${this.apiServerUrl}/cinema/cities`);
    }

    public getAllCinemasOfSpecifiedCity(selectedCityId: number): Observable<Cinema[]> {

        return this.http.get<Cinema[]>(`${this.apiServerUrl}/cinema/specifiedCity/cinemas?cityId= ` + selectedCityId );
    }

    public getAllCinemaHallsOfSpecifiedCinema(selectedCinemaId: number): Observable<CinemaHall[]> {

        return this.http.get<CinemaHall[]>(`${this.apiServerUrl}/cinema/specifiedCinema/cinemaHalls?cinemaId= ` + selectedCinemaId );

    }

    public getAllMovieSeancesOfSpecifiedCinemaHall(selectedCinemaHallId: number): Observable<MovieSeance[]> {

        return this.http.get<MovieSeance[]>(`${this.apiServerUrl}/cinema/specifiedCinemaHall/movieSeances?cinemaHallId= `
        + selectedCinemaHallId );

    }
}

