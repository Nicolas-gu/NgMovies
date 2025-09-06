import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from "@angular/material/input";
import { RoutingService } from '../../core/services/routing-service';
import { UserService } from '../../core/services/user-service';



@Component({
  selector: 'app-toolbar',
  imports: [ MatIconModule, MatMenuModule, MatInputModule, RouterModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  
})
export class Toolbar {
  
  _routing = inject(RoutingService)
  _user = inject(UserService)
  
  
}
