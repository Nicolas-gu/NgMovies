import { MovieModel } from './../../core/models/movie-model.models';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';


@Component({
  selector: 'app-upcoming',
  imports: [],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss'
})
export class Upcoming implements OnInit{

  api = inject(ApiService);
  upcomingMovie = signal<any>([]);

  ngOnInit(): void {
    this.api.getMovieByUpcoming().subscribe(
      data => {
        this.upcomingMovie.set(data.results);
        console.log(this.upcomingMovie());
    })
  }
}
