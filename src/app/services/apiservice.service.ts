import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_URL } from '../api-constants';
import { Observable } from 'rxjs';
import { Series } from '../models/series';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  popularMovies: any[] = [];
  popularSeries: any[] = [];
  movies: any[] = [];
  series: any[] = [];

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1`;
    return this.http.get<any[]>(url);
  }
  
  getMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b1138baa2f255e1ed451defcd6454564`;
    return this.http.get<any[]>(url);
  }

  getMovieById(id:any):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=b1138baa2f255e1ed451defcd6454564")
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const url = `https://api.themoviedb.org/3/movie/"+id+"?api_key=b1138baa2f255e1ed451defcd6454564`;
    return this.http.get<Movie>(url);
  }

  getSeriesDetails(seriesId: string): Observable<Series> {
    const url = `${API_URL}/tv/${seriesId}?api_key=${API_KEY}`;
    return this.http.get<Series>(url);
  }

  getPopularMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b1138baa2f255e1ed451defcd6454564`;
    return this.http.get<any[]>(url);
  }

  getPopularSeries(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=b1138baa2f255e1ed451defcd6454564`;
    return this.http.get<any[]>(url);
  }

}
