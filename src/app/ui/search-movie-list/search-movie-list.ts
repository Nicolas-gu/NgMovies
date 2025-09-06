import { Component, effect, inject, input, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { Router, RouterLink } from '@angular/router';

import { MovieModel } from '../../core/models/movie-model.models';
import { MatIcon } from '@angular/material/icon';
import { SerieModel } from '../../core/models/serie-model.models';

@Component({
  selector: 'app-search-movie-list',
  imports: [RouterLink, MatIcon],
  templateUrl: './search-movie-list.html',
  styleUrl: './search-movie-list.scss'
})
export class SearchMovieList implements OnChanges{
  private _api = inject(ApiService);
  _router = inject(Router)
  movieList = signal<any[]>([]);
  query = input<string>("");
  // queryG = input<string | null>(null);
  currentPage = signal(1);
  genreList = ["Action","Aventure","Animation","Comédie","Crime","Documentaire",
    "Drame","Familial","Fantastique","Histoire","Horreur","Musique","Mystère",
    "Romance","Science-Fiction","Téléfilm","Thriller","Guerre","Western"]

  constructor() {
    effect(() => {
      if (this.query) {
        if (this.genreList.includes(this.query())){
          this._api.getMovieByDiscover(this.query(), this.currentPage()).subscribe(
          data => {
            this.movieList.set(data.results);
            console.log(this.movieList())
          }
        )}
        else{
          this._api.searchMovie(this.query(), this.currentPage()).subscribe(
            data => {
              this.movieList.set(data.results);
              console.log(this.movieList())
            }
          )
        }
      }
    })
  }
  
  nextPage(): void{
    if(this.movieList().length === 20){
      this.currentPage.update(currentPage => currentPage + 1)
      window.scrollTo({ top:0, behavior: 'smooth'})
    }
  }
  prevPage(): void{
    this.currentPage.update(page => page - 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage.set(1)
  }
}
