import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDrawerMode, MatSidenav, MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";

import { FormControl } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Toolbar } from './ui/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Toolbar, MatToolbarModule, MatButtonModule, MatSidenavContainer, MatSidenav, MatSidenavModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
})
export class App {
  mode = new FormControl('over' as MatDrawerMode);
  
}
