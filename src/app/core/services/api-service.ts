
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie-model.models';

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

  searchMovie(external_id:string):Observable<any>{
    return this.http.get(`${this.API}find/${external_id}?api_key=${this.API_key}&language=fr-FR&include_adult=false`)
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


  
}

//https://api.themoviedb.org/3/genre/movie/list?api_key=51b67384efd18ca981c82e5fae096c01&language=fr-FR