import { Component, effect, inject, input, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ROUTER_OUTLET_DATA, RouterLink } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';
import { MovieModel } from '../../core/models/movie-model.models';

@Component({
  selector: 'app-search-movie-list',
  imports: [RouterLink, SearchBar],
  templateUrl: './search-movie-list.html',
  styleUrl: './search-movie-list.scss'
})
export class SearchMovieList {
  private _api = inject(ApiService);
  movieList = signal<MovieModel[]>([]);
  external_id = signal<any>("")

  constructor() {
    effect(() => {
      this._api.searchMovie(this.external_id()).subscribe(
        data => {
          this.movieList.set(data.results)
          console.log(this.movieList())
        }
      )
    })
  }
}
