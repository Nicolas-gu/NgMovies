import { Component, inject, signal } from '@angular/core';
import { Router,  RouterOutlet } from '@angular/router';
import { MatDrawerMode,  MatSidenavModule } from "@angular/material/sidenav";

import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Toolbar } from './ui/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Toolbar, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
})
export class App {

  mode = new FormControl('over' as MatDrawerMode);
  router = inject(Router)

  onSubmit(){
    this.router.navigate(['search/'])

  }
}
