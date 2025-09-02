import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesList } from './series-list/series-list';

@Component({
  selector: 'app-series',
  imports: [SeriesList],
  templateUrl: './series.html',
  styleUrl: './series.scss'
})
export class Series {
  private route = inject(ActivatedRoute);
  category = signal<string>('');
  categoryTitle = signal<string>('');
  

  private titles: Record<string, string> = {
    now_playing: 'En salle maintenant',
    popular: 'Populaires',
    top_rated: 'Les mieux notés',
    upcoming: 'À venir'
  };

  constructor() {
    this.route.paramMap.subscribe(params => {
      const cat = params.get('category') ?? '';
      this.category.set(cat);
      this.categoryTitle.set(this.titles[cat] ?? 'Films');
    });
  }
  
}
