import { Serie } from './ui/serie/serie';
import { Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { MyFavorite } from './ui/my-favorite/my-favorite';
import { ReactivForm } from './ui/reactiv-form/reactiv-form';
import { Movies } from './ui/movies/movies';
import { Movie } from './ui/movie/movie';
import { SearchMovieList } from './ui/search-movie-list/search-movie-list';
import { Series } from './ui/series/series';

export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full' },
    {path: "home", component: Home},
    {path: "my_favorite", component: MyFavorite},
    {path: "new-user", component: ReactivForm},
    {path: "movies/:category", component: Movies},
    {path: "movie/:id", component: Movie},
    {path: "search", component: SearchMovieList},
    {path: "series/:category", component: Series},
    {path: "serie/:id", component: Serie},
];
