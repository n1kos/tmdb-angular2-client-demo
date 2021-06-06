import { ApiToken } from "./model-common";

export type GuestSessionRequest = ApiToken;
export interface RateRequest {
  movieId: number;
  rating: number;
}
