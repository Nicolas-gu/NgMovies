
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

  searchMovie(query:string): Observable<any>{
    return this.http.get(`${this.API}search/movie?api_key=${this.API_key}&query=${encodeURIComponent(query)}&language=fr-FR`)
  }

  
}

//https://api.themoviedb.org/3/movie/latest?api_key=51b67384efd18ca981c82e5fae096c01&language=fr-FR