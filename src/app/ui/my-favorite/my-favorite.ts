import { MatIconModule } from '@angular/material/icon';
import { Component, effect, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MovieModel } from '../../core/models/movie-model.models';
import { SerieModel } from '../../core/models/serie-model.models';
import { UserService } from '../../core/services/user-service';
import { ApiService } from '../../core/services/api-service';

@Component({
  selector: 'app-my-favorite',
  imports: [RouterLink, MatIconModule],
  templateUrl: './my-favorite.html',
  styleUrl: './my-favorite.scss'
})
export class MyFavorite {
  _router = inject(Router)
  _user = inject(UserService)
  _api = inject(ApiService)
  currentPage = signal(1);
  favoriteMovie = signal<MovieModel[]>([]);
  favoriteSerie = signal<SerieModel[]>([]);
  isMovie = signal(true);

  constructor(){
    effect(() => {
      const ids = this._user.favoriteMovie();
      this.favoriteMovie.set([]);
      ids.forEach(id => {
        this._api.getMovie(id).subscribe(movie => {
          this.favoriteMovie.update(current => [...current, movie]);
          console.log(this.favoriteMovie())
          console.log('IDs favoris:', this._user.favoriteMovie());
        });
      });
      const idserie = this._user.favoriteSerie();
      this.favoriteSerie.set([]);
      idserie.forEach(id => {
        this._api.getSerie(id).subscribe(serie => {
          this.favoriteSerie.update(current => [...current, serie]);
          console.log(this.favoriteSerie())
          console.log('IDs favoris:', this._user.favoriteSerie());
        });
      });
    })
  }

  nextPage(): void{
    this.currentPage.update(currentPage => currentPage + 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
  prevPage(): void{
    this.currentPage.update(page => page - 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
  setMovie(){
    this.isMovie.set(true)
  }
  setSerie(){
    this.isMovie.set(false)
  }
}
