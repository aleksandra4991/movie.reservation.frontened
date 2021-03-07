import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MovieService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {  }

    public getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiServerUrl}/cinema/movies`);
    }

    public getSpecifiedMovie(title: string): Observable<Movie> {
        return this.http.get<Movie>(`${this.apiServerUrl}/cinema/specifiedMovie`);
    }

}
