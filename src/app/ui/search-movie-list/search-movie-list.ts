import { Component, inject, Input, OnChanges, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { Router, RouterLink } from '@angular/router';

import { MovieModel } from '../../core/models/movie-model.models';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-search-movie-list',
  imports: [RouterLink, MatIcon],
  templateUrl: './search-movie-list.html',
  styleUrl: './search-movie-list.scss'
})
export class SearchMovieList implements OnChanges {
  private _api = inject(ApiService);
  _router = inject(Router)
  movieList = signal<MovieModel[]>([]);
  @Input() query!: string;
  currentPage = signal(1);
  

  ngOnChanges(): void{
    if (this.query) {
      this._api.searchMovie(this.query).subscribe(
        data => {
          this.movieList.set(data.results);
          console.log(this.movieList)
          console.log(this.query)
        }
      )
    }
  }
  nextPage(): void{
    this.currentPage.update(currentPage => currentPage + 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
  prevPage(): void{
    this.currentPage.update(page => page - 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
}
