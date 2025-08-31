import { Component, effect, inject, input, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ROUTER_OUTLET_DATA, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-movie-list',
  imports: [RouterLink],
  templateUrl: './search-movie-list.html',
  styleUrl: './search-movie-list.scss'
})
export class SearchMovieList {
  data = inject(ROUTER_OUTLET_DATA)
  private _api = inject(ApiService);
  movieList = signal<any[]>([]);
  external_id = signal<any>(this.data)

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
