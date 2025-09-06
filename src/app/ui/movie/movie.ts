import { Component, computed, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SimilarList } from '../similar-list/similar-list';
import { MovieModel } from '../../core/models/movie-model.models';
import { DatePipe } from '@angular/common';
import { HourMinutePipe } from '../../core/services/hour-minute-pipe';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-movie',
  imports: [SimilarList, DatePipe, HourMinutePipe],
  templateUrl: './movie.html',
  styleUrl: './movie.scss'
})
export class Movie {

  _api = inject(ApiService);
  _route = inject(ActivatedRoute);
  movie = signal<MovieModel | null>(null);
  _user = inject(UserService);
  
  constructor(){
    this._route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this._api.getMovie(id).subscribe(
          data => {
            this.movie.set(data)
            console.log(this.movie())
          }
        )
      }
    }) 
  }
  addToFavorites() {
  const id = this.movie()?.id;
  if (id != null) {
    this._user.addFavorites(id.toString());
  }
}
}
