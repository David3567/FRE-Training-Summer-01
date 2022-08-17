export interface RawMovie {
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

export interface MovieList {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface RootVideo {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: Date;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
