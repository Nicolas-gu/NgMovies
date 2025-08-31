import { Component, effect, inject, input, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SimilarList } from '../similar-list/similar-list';

@Component({
  selector: 'app-movie',
  imports: [SimilarList],
  templateUrl: './movie.html',
  styleUrl: './movie.scss'
})
export class Movie {

  api = inject(ApiService);
  route = inject(ActivatedRoute);
  movie = signal<any>(null);
  
  

  constructor(){
    effect(() => {
      this.route.paramMap.subscribe(params => {
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
    })
  }
}
