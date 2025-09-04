import { Component } from '@angular/core';
import { MoviesList } from '../movies/movies-list/movies-list';
import { MatIconModule } from "@angular/material/icon";
import { SearchBar } from '../search-bar/search-bar';
import { SeriesList } from '../series/series-list/series-list';
import { SearchMovieList } from '../search-movie-list/search-movie-list';



@Component({
  selector: 'app-home',
  imports: [MoviesList, MatIconModule, SearchBar, SeriesList, SearchMovieList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  searchQuery: string | null = null;

  onSearch(query: string) {
    this.searchQuery = query ? query: null;
    console.log(this.searchQuery)
  }
}
