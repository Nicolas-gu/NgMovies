import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from "@angular/material/input";



@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, MatIconModule, MatMenuModule, MatInputModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  
})
export class Toolbar {
  showSearch = false;
}
