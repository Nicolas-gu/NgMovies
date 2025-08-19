import { Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { MyFavorite } from './ui/my-favorite/my-favorite';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "my_favorite", component: MyFavorite},
];
