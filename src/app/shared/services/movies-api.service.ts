import { Injectable } from "@angular/core";
import { Movie } from "../models/model-common";

@Injectable({
  providedIn: "root",
})
export class MoviesApiService {
  movies: Movie[] = [
    { id: 1, title: "m1" },
    { id: 2, title: "m2" },
    { id: 3, title: "m3" },
  ];
  constructor() {}

  searchMovies() {
    console.log("searching");
  }

  getMovies() {
    return this.movies;
  }
}
