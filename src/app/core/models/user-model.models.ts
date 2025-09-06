import { MovieModel } from "./movie-model.models";
import { SerieModel } from "./serie-model.models";

export interface UserModel{
    id?: number
    name: string | null;
    email: string | null;
    password: string | null;
    favoritesMovie?: string[] | null;
    favoritesSerie?: string[] | null


}