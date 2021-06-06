import { Injectable } from "@angular/core";
import { Movie, Rating } from "../models/model-common";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { AuthenticateServiceService } from "./authenticate-service.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { MoviesResponse, RateResponse } from "../models/model-response";
import { RateRequest } from "../models/model-request";

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

  rateMovies(movieId: number, rating: number): void {
    console.log("i should be rating");

    movieId = 617120; // will be using this test movie for not messing with their data a lot
    const apikey = this.authenticateServiceService.logKey().api_key;
    const guest_session_id =
      this.authenticateServiceService.logKey().guest_session_id;
    const endPoint = `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apikey}&guest_session_id=${guest_session_id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    const reqBody: any = { value: rating };
    // return (
    //   this.httpClient
    //     .post<any>(endPoint, reqBody, httpOptions)
    //     //@ts-expect-error gamhse mas
    //     .pipe(catchError(this.handleError("addHero", rating)))
    // );

    this.httpClient
      .post<any>(endPoint, reqBody, httpOptions)
      .subscribe((data) => {
        console.log("whatevs");
      });
  }

  getMovies() {
    return this.movies;
  }
}
