import { GuestSessionResponse } from "./model-response";

export interface ApiToken {
  api_key: string;
}
export interface Search {
  searchTerm: string;
}
export interface Movie {
  id: number;
  title?: string;
}

export interface RequestTokens extends ApiToken, GuestSessionResponse {}
