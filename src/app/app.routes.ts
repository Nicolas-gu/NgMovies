import { Serie } from './ui/serie/serie';
import { Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { MyFavorite } from './ui/my-favorite/my-favorite';
import { ReactivForm } from './ui/reactiv-form/reactiv-form';
import { Movies } from './ui/movies/movies';
import { Movie } from './ui/movie/movie';
import { Series } from './ui/series/series';
import { Connexion } from './ui/connexion/connexion';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "my_favorite", component: MyFavorite},
    {path: "new-user", component: ReactivForm},
    {path: "connexion", component: Connexion},
    {path: "movies/:category", component: Movies},
    {path: "movie/:id", component: Movie},
    {path: "series/:category", component: Series},
    {path: "serie/:id", component: Serie},
    {path: "", redirectTo: 'home', pathMatch: 'full' },
];
