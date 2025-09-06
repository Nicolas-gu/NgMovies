import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  _router = inject(Router);

  goConnexion(){
    this._router.navigateByUrl("/connexion")
  }
  goNew(){
    this._router.navigateByUrl("/new-user")
  }
  goHome(){
    this._router.navigateByUrl("/home")
  }
  goFavorite(){
    this._router.navigateByUrl("/my_favorite")
  }
  
}
