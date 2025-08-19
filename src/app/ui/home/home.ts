import { Component } from '@angular/core';
import { LatestRelease } from '../latest-release/latest-release';
import { TopRated } from '../top-rated/top-rated';

@Component({
  selector: 'app-home',
  imports: [LatestRelease, TopRated],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
