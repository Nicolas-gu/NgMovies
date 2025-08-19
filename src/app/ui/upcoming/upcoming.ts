import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { MovieModel } from '../../core/models/movie-model.models';

@Component({
  selector: 'app-upcoming',
  imports: [],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss'
})
export class Upcoming implements OnInit{

  api = inject(ApiService);
  upcomingMovie = signal<MovieModel[]>([]);

  ngOnInit(): void {
    console.log("ca marche")
  }
}
