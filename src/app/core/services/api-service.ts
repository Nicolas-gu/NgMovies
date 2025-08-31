
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
  movieOrTv = signal("movie/")
    

  getMovieListByCategory(category: string):Observable<any>{
    return this.http.get(`${this.API}${this.movieOrTv()}${category}?api_key=${this.API_key}&language=fr-FR`)
  }

  searchMovie(external_id:string):Observable<any>{
    return this.http.get(`${this.API}find/${external_id}?api_key=${this.API_key}&language=fr-FR`)
  }

  getMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}${this.movieOrTv()}${movieId}?api_key=${this.API_key}&language=fr-FR`)
  }

  getSimilarMovie(movieId: string):Observable<any>{
    return this.http.get(`${this.API}${this.movieOrTv()}${movieId}/similar?api_key=${this.API_key}&language=fr-FR`)
  }
  
}

//https://api.themoviedb.org/3/movie/latest?api_key=51b67384efd18ca981c82e5fae096c01&language=fr-FR