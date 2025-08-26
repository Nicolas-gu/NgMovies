import { Component } from '@angular/core';
import { MoviesList } from '../movies/movies-list/movies-list';
import { Toolbar } from "../toolbar/toolbar";
import { MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";



@Component({
  selector: 'app-home',
  imports: [MoviesList, Toolbar, MatSidenavContainer, MatSidenavModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}
