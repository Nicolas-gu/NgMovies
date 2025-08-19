import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieModel } from '../models/movie-model.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = "https://api.themoviedb.org/3/";
  API_key = "51b67384efd18ca981c82e5fae096c01";
  http = inject(HttpClient)

  // recup par derniere sortie
  getMovieByLatestRelease(limit: number = 0){
    return this.http.get<MovieModel[]>(`${this.API}movie/latest?api_key=${this.API_key}&language=fr-FR`)
  }
}
