export interface Movie {
  release_date?: string;
  title?: string;
  poster_path?: any;
  vote_average?: number;


// export interface RootObject {
//   adult: boolean;
//   backdrop_path: string;
//   belongs_to_collection?: any;
//   budget: number;
//   genres: Genre[];
//   homepage: string;
//   id: number;
//   imdb_id: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path?: any;
//   production_companies: ProductionCompany[];
//   production_countries: ProductionCountry[];
//   release_date: string;
//   revenue: number;
//   runtime: number;
//   spoken_languages: SpokenLanguage[];
//   status: string;
//   tagline: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

// export interface Genre {
//   id: number;
//   name: string;
// }

// export interface ProductionCompany {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// }

// export interface ProductionCountry {
//   iso_3166_1: string;
//   name: string;
// }

// export interface SpokenLanguage {
//   iso_639_1: string;
//   name: string;
// }

export interface RootObject {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: Item[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string;
}

export interface Item {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
