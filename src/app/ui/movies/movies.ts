import { Component } from '@angular/core';
import { MoviesList } from './movies-list/movies-list';

@Component({
  selector: 'app-movies',
  imports: [MoviesList],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {

}
