import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  imports: [FormsModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss'
})
export class MovieSearch {
  query: string = '';
  movies: any[] = [];

  constructor(private apiService: ApiService) {}

  search() {
    if (!this.query.trim()) return;

    this.apiService.searchMovie(this.query).subscribe({
      next: (data) => this.movies = data.results,
      error: (err) => console.error(err)
    });
  }
}
