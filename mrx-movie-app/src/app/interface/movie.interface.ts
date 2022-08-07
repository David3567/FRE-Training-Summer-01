export interface Movie{
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

export interface result{
    adult: boolean;
    backdrop_path: string;
    genre_ids: [];
    original_language:string;
    id: number;
    original_title: string;
    overview:string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

export interface RootObject{
    dates: [];
    page: number;
    results: result[];
    totalPages: number;
    totalResults: number;
}