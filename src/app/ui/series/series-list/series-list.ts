import { MatIconModule } from '@angular/material/icon';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { Router, RouterLink } from '@angular/router';
import { SerieModel } from '../../../core/models/serie-model.models';

@Component({
  selector: 'app-series-list',
  imports: [MatIconModule, RouterLink],
  templateUrl: './series-list.html',
  styleUrl: './series-list.scss'
})
export class SeriesList {

  _api = inject(ApiService);
  _router = inject(Router);
  seriesList = signal<SerieModel[] | null>(null);
  seriesList8 = computed(() => {
    const list = this.seriesList();
    return list ? list.slice(0,8) : []
  })
  category = input.required<string>();
  categoryTitle = input.required<string>();
  isHome = signal<boolean>(false);
  currentPage = signal(1);


  constructor() {
    effect(() => {    
      this.isHome.set(this._router.url === '/home');
      this._api.getSerieListByCategory(this.category(), this.currentPage()).subscribe(
        data => {
          this.seriesList.set(data.results)
          console.log(this.seriesList())
        }
      )
    })
  }
  nextPage(): void{
    this.currentPage.update(currentPage => currentPage + 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
  prevPage(): void{
    this.currentPage.update(page => page - 1)
    window.scrollTo({ top:0, behavior: 'smooth'})
  }
}
