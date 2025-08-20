import { ApiService } from '../../core/services/api-service';
import { MovieModel } from './../../core/models/movie-model.models';
import { Component, inject, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-upcoming',
  imports: [],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss'
})
export class Upcoming implements OnInit{

  api = inject(ApiService);
  upcomingMovie = signal<any>([]);
  category = "/upcoming"

  ngOnInit(): void {
    this.api.getMovieListByCategory(this.category).subscribe(
      data => {
        this.upcomingMovie.set(data.results);
        console.log(this.upcomingMovie());
    })
  }
}
