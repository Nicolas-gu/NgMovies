import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { MovieModel } from '../../core/models/movie-model.models';


@Component({
  selector: 'app-latest-release',
  imports: [],
  templateUrl: './latest-release.html',
  styleUrl: './latest-release.scss'
})
export class LatestRelease implements OnInit{
  api = inject(ApiService)
  movies = signal<MovieModel[]|null>(null);
  // loading = signal(true)

  ngOnInit(): void {
    this.api.getMovieByLatestRelease()
      .subscribe((data)=> {
        this.movies.set(data);
        // this.loading.set(false)
        //console.log(this.movies)
      })
  }

}
