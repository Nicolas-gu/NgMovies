import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';

@Component({
  selector: 'app-movies-list',
  imports: [],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList implements OnInit{

  api = inject(ApiService);
  moviesList = signal<any[]>([]);
  category = "/top_rated"
  
ngOnInit(): void {
  this.api.getMovieListByCategory(this.category).subscribe(
    data => {
      this.moviesList.set(data.results)
      console.log(this.moviesList)
    }
  )
}
}
