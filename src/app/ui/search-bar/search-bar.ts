import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  externalId: FormGroup;

  constructor(){
    this.externalId = this.formbuilder.group({
      searchInput:""
  });

  this.externalId.get("searchInput")?.valueChanges
    .pipe(
      debounceTime(300),
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

  
 

}
