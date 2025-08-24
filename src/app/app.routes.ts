import { Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { MyFavorite } from './ui/my-favorite/my-favorite';
import { ReactivForm } from './ui/reactiv-form/reactiv-form';
import { Movies } from './ui/movies/movies';

export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full' },
    {path: "home", component: Home},
    {path: "my_favorite", component: MyFavorite},
    {path: "new-user", component: ReactivForm},
    {path: "top_rated", component: Movies},
];
