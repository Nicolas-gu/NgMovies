import { Component, inject, input, signal } from '@angular/core';
import { MoviesList } from './movies-list/movies-list';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from "../pagination/pagination";

@Component({
  selector: 'app-movies',
  imports: [MoviesList, Pagination],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {
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
