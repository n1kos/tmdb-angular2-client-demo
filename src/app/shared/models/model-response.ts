import { Movie, MovieDetails, PageResults } from "./model-common";
export interface GuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: Date;
}
export interface MoviesResponse extends Movie, PageResults, MovieDetails {
  results: MovieDetails[];
}

export interface RateResponse {
  status_code?: number;
  status_message?: string;
}
