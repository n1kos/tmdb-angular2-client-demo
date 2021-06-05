import { Injectable } from "@angular/core";
import { Movie } from "../models/model-common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticateServiceService } from "./authenticate-service.service";
import { Observable } from "rxjs";
import { MoviesResponse } from "../models/model-response";

@Injectable({
  providedIn: "root",
})
export class MoviesApiService {
  movies: Movie[] = [];

  constructor(
    private authenticateServiceService: AuthenticateServiceService,
    private httpClient: HttpClient
  ) {}

  searchMovies(
    searchTerm: string | null = "",
    page = 1
  ): Observable<MoviesResponse> {
    const apikey = this.authenticateServiceService.logKey().api_key;
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`;
    return this.httpClient.get<MoviesResponse>(endPoint);
  }

  gethMoviesDetails(searchTerm: number | null = 0): Observable<Movie> {
    const apikey = this.authenticateServiceService.logKey().api_key;
    const endPoint = `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=${apikey}&language=en-US`;
    return this.httpClient.get<Movie>(endPoint);
  }

  getMovies() {
    return this.movies;
  }
}
