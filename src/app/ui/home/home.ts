import { Component } from '@angular/core';
import { MoviesList } from '../movies/movies-list/movies-list';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { SearchBar } from '../search-bar/search-bar';



@Component({
  selector: 'app-home',
  imports: [MoviesList, MatSidenavModule, MatIconModule, SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}
