
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

    

  getMovieListByCategory(category: string):Observable<any>{
    return this.http.get(`${this.API}movie/${category}?api_key=${this.API_key}&language=fr-FR`)
  }
  getTvListByCategory(category: string):Observable<any>{
    return this.http.get(`${this.API}tv/${category}?api_key=${this.API_key}&language=fr-FR`)
  }

  searchMovie(external_id:string):Observable<any>{
    return this.http.get(`${this.API}find/${external_id}?api_key=${this.API_key}&language=fr-FR`)
  }

  getMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}movie/${movieId}?api_key=${this.API_key}&language=fr-FR`)
  }
  getTv(movieId: string):Observable<any>{
    return this.http.get(`${this.API}tv/${movieId}?api_key=${this.API_key}&language=fr-FR`)
  }

  getSimilarMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}movie/${movieId}/similar?api_key=${this.API_key}&language=fr-FR`)
  }
  getSimilarTV(movieId: string):Observable<any>{
    return this.http.get(`${this.API}tv/${movieId}/similar?api_key=${this.API_key}&language=fr-FR`)
  }


  
}

//https://api.themoviedb.org/3/movie/latest?api_key=51b67384efd18ca981c82e5fae096c01&language=fr-FR