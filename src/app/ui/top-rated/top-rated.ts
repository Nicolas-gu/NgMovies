import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';

@Component({
  selector: 'app-top-rated',
  imports: [],
  templateUrl: './top-rated.html',
  styleUrl: './top-rated.scss'
})
export class TopRated implements OnInit{

  api = inject(ApiService);
  topRatedMovie = signal<any>([]);
  category = "/top_rated"

  ngOnInit(): void {
    this.api.getMovieListByCategory(this.category).subscribe(
      data => {
        this.topRatedMovie.set(data.results);
        console.log(this.topRatedMovie());
    })
  }

}
