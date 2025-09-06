import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  formbuilder = inject(FormBuilder)
  router = inject(Router)
  @Output() search = new EventEmitter<string>();
  @Output() genre = new EventEmitter<string>();
  externalId: FormGroup;
  genreControl = new FormControl('');
  genres = [
    {"id": 28,"name": "Action"},
    {"id": 12,"name": "Aventure"},
    {"id": 16,"name": "Animation"},
    {"id": 35,"name": "Comédie"},
    {"id": 80,"name": "Crime"},
    {"id": 99,"name": "Documentaire"},
    {"id": 18,"name": "Drame"},
    {"id": 10751,"name": "Familial"},
    {"id": 14,"name": "Fantastique"},
    {"id": 36,"name": "Histoire"},
    {"id": 27,"name": "Horreur"},
    {"id": 10402,"name": "Musique"},
    {"id": 9648,"name": "Mystère"},
    {"id": 10749,"name": "Romance"},
    {"id": 878,"name": "Science-Fiction"},
    {"id": 10770,"name": "Téléfilm"},
    {"id": 53,"name": "Thriller"},
    {"id": 10752,"name": "Guerre"},
    {"id": 37,"name": "Western"}
  ]

  constructor(){
    this.externalId = this.formbuilder.group({
      searchInput:""
  });

  this.externalId.get("searchInput")?.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      if(value && value.length >= 3) {
        this.search.emit(value);
      }else{
        this.search.emit("")
      }
      console.log(value)
    })
  }
  genreChange(){
    const genreSelected = this.genreControl.value
    if(genreSelected)
    this.search.emit(genreSelected)
    console.log(genreSelected)
  }
  
 

}
