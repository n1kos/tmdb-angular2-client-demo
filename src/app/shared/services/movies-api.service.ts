import { Injectable } from "@angular/core";
import { Movie } from "../models/model-common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticateServiceService } from "./authenticate-service.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesApiService {
  movies: Movie[] = [
    { id: 1, title: "m1" },
    { id: 2, title: "m2" },
    { id: 3, title: "m3" },
  ];

  constructor(
    private authenticateServiceService: AuthenticateServiceService,
    private httpClient: HttpClient
  ) {}

  searchMovies(searchTerm: string | null = ""): Observable<Movie> {
    const apikey = this.authenticateServiceService.logKey().api_key;
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    return this.httpClient.get<Movie>(endPoint);
  }

  getMovies() {
    return this.movies;
  }
}
