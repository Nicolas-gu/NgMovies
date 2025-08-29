import { Component, inject, input, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [JsonPipe],
  templateUrl: './movie.html',
  styleUrl: './movie.scss'
})
export class Movie {

  api = inject(ApiService);
  route = inject(ActivatedRoute);
  movie = signal<any>(null);
  
  

  constructor(){
    const id = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this.api.getMovie(id).subscribe(
          data => {
            this.movie.set(data)
            console.log(this.movie())
          }
        )
      }
    }) 
  }
}
