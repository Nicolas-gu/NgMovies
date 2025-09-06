
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = "https://api.themoviedb.org/3/";
  API_key = "51b67384efd18ca981c82e5fae096c01";
  http = inject(HttpClient)

  getMovieListByCategory(category: string, page: number = 1):Observable<any>{
    return this.http.get(`${this.API}movie/${category}?api_key=${this.API_key}&language=fr-FR&page=${page}&include_adult=false`);
  }
  getSerieListByCategory(category: string, page: number = 1):Observable<any>{
    return this.http.get(`${this.API}tv/${category}?api_key=${this.API_key}&language=fr-FR&page=${page}&include_adult=false`)
  }

  searchMovie(query:string, page: number = 1):Observable<any>{
    return this.http.get(`${this.API}search/multi?api_key=${this.API_key}&language=fr-FR&page=${page}&include_adult=false&query=${query}`)
  }

  getMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}movie/${movieId}?api_key=${this.API_key}&language=fr-FR&include_adult=false`)
  }
  getSerie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}tv/${movieId}?api_key=${this.API_key}&language=fr-FR&include_adult=false`)
  }

  getSimilarMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}movie/${movieId}/similar?api_key=${this.API_key}&language=fr-FR&include_adult=false`)
  }
  getSimilarSerie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}tv/${movieId}/similar?api_key=${this.API_key}&language=fr-FR&include_adult=false`)
  }
  getMovieByDiscover(query: string, page: number = 1): Observable<any>{
    return this.http.get(`${this.API}discover/movie?api_key=${this.API_key}&with_genres=${query}&language=fr-FR&include_adult=false`)
  }

}

//https://api.themoviedb.org/3/discover/movie?api_key=51b67384efd18ca981c82e5fae096c01&language=fr-FR&with_genres=Drame