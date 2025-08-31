import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from "@angular/material/input";
import { ApiService } from '../../core/services/api-service';



@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, MatIconModule, MatMenuModule, MatInputModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  
})
export class Toolbar {
  showSearch = false;
  api = inject(ApiService)
  router = inject(Router)
  isMovie = true
  
  changeMovieTv(){
    // if (this.router.url !== "movie"){
      this.isMovie = !this.isMovie
      if(this.isMovie){
        this.api.movieOrTv.set("movie/")
        console.log("ca marche pour film??")
      }else{
        this.api.movieOrTv.set("tv/")
        console.log("ca marche?")
      }
    // }
  }
}
