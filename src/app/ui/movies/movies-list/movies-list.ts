import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  imports: [MatCardModule],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList implements OnInit{

  api = inject(ApiService);
  _router = inject(Router)
  moviesList = signal<any[]>([]);
  // category = "/top_rated"
  category = input.required<string>();
  
  ngOnInit(): void {
    this.api.getMovieListByCategory(this.category()).subscribe(
      data => {
        this.moviesList.set(data.results)
        console.log(this.moviesList)
      }
    )
  }
}
