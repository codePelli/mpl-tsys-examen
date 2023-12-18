import { Genres } from "./genres";

export class Series {

    series_id!: number;
    name!: string;
    original_name!: string;
    overview!: string;
    first_air_date!: string;
    poster_path!: string;
    genres?: Genres[];
    vote_count?: number;
}
