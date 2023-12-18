import { Genres } from "./genres";

export class Movie {

    id!: number;
    title!: string;
    original_title!: string;
    overview!: string;
    release_date!: string;
    poster_path!: string;
    genres?: Genres[];
    vote_count?: number; 
}
