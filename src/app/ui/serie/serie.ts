import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SerieModel } from '../../core/models/serie-model.models';
import { SimilarList } from '../similar-list/similar-list';

@Component({
  selector: 'app-serie',
  imports: [SimilarList],
  templateUrl: './serie.html',
  styleUrl: './serie.scss'
})
export class Serie {

  _api = inject(ApiService);
  _route = inject(ActivatedRoute);
  serie = signal<SerieModel | null>(null);
  
  
  

  constructor(){
    this._route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this._api.getSerie(id).subscribe(
          data => {
            this.serie.set(data)
            console.log(this.serie())
          }
        )
      }
    }) 
  }
}
