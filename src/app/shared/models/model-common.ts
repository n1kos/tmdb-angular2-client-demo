import { GuestSessionResponse } from "./model-response";

export interface ApiToken {
  api_key: string;
}
export interface Search {
  searchTerm: string;
}
export interface Languages {
  iso_639_1?: string;
  name?: string;
}
export interface PageResults {
  page?: number;
  total_pages?: number;
  total_results?: number;
}
export interface Movie {
  id: number;
  title?: string;
  poster_path?: string;
  Vote_average?: number;
}
export interface MovieDetails extends Movie {
  overview?: string;
  budget?: string;
  release_date?: string;
  revenue?: string;
  vote_average?: number;
  vote_count?: number;
  spoken_languages: Languages[];
}

export interface RequestTokens extends ApiToken, GuestSessionResponse {}

export interface Rating {
  name: string;
  value: number;
}
