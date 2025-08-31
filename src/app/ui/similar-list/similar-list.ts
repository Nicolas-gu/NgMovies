import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-similar-list',
  imports: [RouterLink],
  templateUrl: './similar-list.html',
  styleUrl: './similar-list.scss'
})
export class SimilarList {

  _api = inject(ApiService)
  private route = inject(ActivatedRoute)
  similar = signal<any[]>([])

  constructor() {
    effect(() => {
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
    })
  }
}
