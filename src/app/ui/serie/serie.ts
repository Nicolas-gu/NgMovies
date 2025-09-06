import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SerieModel } from '../../core/models/serie-model.models';
import { SimilarList } from '../similar-list/similar-list';
import { UserService } from '../../core/services/user-service';
import { HourMinutePipe } from '../../core/services/hour-minute-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-serie',
  imports: [SimilarList, HourMinutePipe, DatePipe],
  templateUrl: './serie.html',
  styleUrl: './serie.scss'
})
export class Serie {

  _api = inject(ApiService);
  _route = inject(ActivatedRoute);
  _user = inject(UserService)
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
  addToFavoritesSerie() {
    const id = this.serie()?.id;
    if (id != null) {
      this._user.addFavoritesSerie(id.toString());
    }
  }
}
