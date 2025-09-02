import { Component } from '@angular/core';
import { MoviesList } from '../movies/movies-list/movies-list';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { SearchBar } from '../search-bar/search-bar';
import { SeriesList } from '../series/series-list/series-list';



@Component({
  selector: 'app-home',
  imports: [MoviesList, MatSidenavModule, MatIconModule, SearchBar, SeriesList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}
