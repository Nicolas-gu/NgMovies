import { Component } from '@angular/core';
import { Search } from '../search/search';
import { MoviesList } from '../movies/movies-list/movies-list';


@Component({
  selector: 'app-home',
  imports: [ Search, MoviesList ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
