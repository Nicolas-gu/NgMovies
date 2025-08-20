import { Component } from '@angular/core';

import { TopRated } from '../top-rated/top-rated';
import { Upcoming } from '../upcoming/upcoming';
import { Search } from '../search/search';
import { NowPlaying } from '../now-playing/now-playing';

@Component({
  selector: 'app-home',
  imports: [TopRated, Upcoming, Search, NowPlaying],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
