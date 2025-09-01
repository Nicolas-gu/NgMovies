import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MovieModel } from '../../../core/models/movie-model.models';

@Component({
  selector: 'app-movies-list',
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList {

  api = inject(ApiService);
  _router = inject(Router)
  moviesList = signal<MovieModel[] | null>(null);
  category = input.required<string>();
  categoryTitle = input.required<string>();
  isHome = signal<boolean>(false);
  currentPage = signal(1);
  
  
  constructor() {
    effect(() => {    // s'execute a la creation et a chaque changement de signal
      this.isHome.set(this._router.url === '/home');
      this.api.getMovieListByCategory(this.category(), this.currentPage()).subscribe(
        data => {
          this.moviesList.set(data.results)
          console.log(this.moviesList())
        }
      )
    })
  }
  nextPage(): void{
    this.currentPage.update(currentPage => currentPage + 1)
  }
  prevPage(): void{
    this.currentPage.update(page => page - 1)
  }

}
