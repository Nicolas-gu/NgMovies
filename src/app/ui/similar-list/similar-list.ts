import { Component, computed, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-similar-list',
  imports: [RouterLink],
  templateUrl: './similar-list.html',
  styleUrl: './similar-list.scss'
})
export class SimilarList {

  _api = inject(ApiService)
  _route = inject(Router)
  private route = inject(ActivatedRoute)
  similar = signal<any[]>([])
  similar8 = computed(() => {
    const sim = this.similar();
    return sim ? sim.slice(0,8) : []
  })
  isMovie = signal(true)

  constructor() {
    if(this._route.url.includes('/movie/')){
      this.isMovie.set(true)
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if(id) {
          this._api.getSimilarMovie(id).subscribe(
            data => {
              this.similar.set(data.results)
              console.log(this.similar())
            }
          )
        }
      })
    }
    else if(this._route.url.includes('/serie/')){
      this.isMovie.set(false)
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if(id) {
          this._api.getSimilarSerie(id).subscribe(
            data => {
              this.similar.set(data.results)
              console.log(this.similar())
            }
          )
        }
      })
    }
  }
}
