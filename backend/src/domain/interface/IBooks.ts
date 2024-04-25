export interface IBooks extends Document {
    backdrop: string;
    cast: string[];
    classification: string;
    director: string;
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: Date;
    slug: string;
    title: string;
    category:string
}
