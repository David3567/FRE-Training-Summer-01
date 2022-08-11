export interface Search {
  release_date?: string;
  title?: string;
  poster_path?: any;
  vote_average?: number;
}

export interface SearchResult {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface SearchRootObject {
  page: number;
  results: SearchResult[];
  total_results: number;
  total_pages: number;
}
