import { UserModel } from './../models/user-model.models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http = inject(HttpClient)
  private userApi = "http://localhost:3000/users"
   _route = inject(ActivatedRoute);
  //private currentUser = new BehaviorSubject<UserModel | null>(null);  
  currentUser = signal<UserModel | null>(null);
  favoriteMovie = signal<string[]>([]);
  favoriteSerie = signal<string[]>([]);


  createUser(user: UserModel):Observable<UserModel>{
    return this._http.post<UserModel>(this.userApi, user)
  }
  login(name: any, password: any): Observable<boolean>{
    return this._http.get<UserModel[]>(`${this.userApi}?name=${name}&password=${password}`)
    .pipe(
      map(users => {
        if(users.length > 0){
          const userFound = users[0];
          this.currentUser.set(userFound);
          this.favoriteMovie.set(userFound.favoritesMovie ?? []);
          this.favoriteSerie.set(userFound.favoritesSerie ?? []);
          console.log(userFound)
          return true;
        }
        return false;
      })
    )
  }
  logout() {
    this.currentUser
    .set(null);
  }
  addFavorites(id: string){
    const user = this.currentUser();
    if (!user) return;
    this.favoriteMovie.update(current => {
      if (!current.includes(id)) {
        return [...current, id]
      }
      return current;
    });
    const updateUser: UserModel = {
      ...user, favoritesMovie: this.favoriteMovie()
    };
    this._http.patch<UserModel>(`${this.userApi}/${user.id}`, {
      favoritesMovie: updateUser.favoritesMovie
    }).subscribe();
    this.currentUser.set(updateUser);
      console.log(this.favoriteMovie())
  }
  addFavoritesSerie(id: string){
    const user = this.currentUser();
    if (!user) return;
    this.favoriteSerie.update(current => {
      if (!current.includes(id)) {
        return [...current, id]
      }
      return current;
    });
    const updateUser: UserModel = {
      ...user, favoritesSerie: this.favoriteSerie()
    };
    this._http.patch<UserModel>(`${this.userApi}/${user.id}`, {
      favoritesSerie: updateUser.favoritesSerie
    }).subscribe();
    this.currentUser.set(updateUser);
      console.log(this.favoriteSerie())
  }
}
