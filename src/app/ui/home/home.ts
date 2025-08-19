import { Component } from '@angular/core';

import { TopRated } from '../top-rated/top-rated';
import { Upcoming } from '../upcoming/upcoming';

@Component({
  selector: 'app-home',
  imports: [TopRated, Upcoming],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
