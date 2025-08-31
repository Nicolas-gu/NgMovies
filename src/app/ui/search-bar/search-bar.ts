import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  formbuilder = inject(FormBuilder)
  router = inject(Router)
  externalId = this.formbuilder.group({
      searchInput:""
  })
  onSubmit(){
    this.router.navigate(['search/'])

  }

}
