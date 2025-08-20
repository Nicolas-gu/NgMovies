import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';

@Component({
  selector: 'app-now-playing',
  imports: [],
  templateUrl: './now-playing.html',
  styleUrl: './now-playing.scss'
})
export class NowPlaying implements OnInit{

  api = inject(ApiService)
  nowPlayingMovie = signal<any>([]);
  category = "/now_playing"
  

  ngOnInit(): void {
    this.api.getMovieListByCategory(this.category).subscribe(
      data => {
        this.nowPlayingMovie.set(data.results);
        console.log(this.nowPlayingMovie());
    })
  }
}
