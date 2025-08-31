import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from "@angular/material/input";
import { ApiService } from '../../core/services/api-service';



@Component({
  selector: 'app-toolbar',
  imports: [ MatIconModule, MatMenuModule, MatInputModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  
})
export class Toolbar {
  showSearch = false;
  api = inject(ApiService)
  router = inject(Router)
  
  
}
