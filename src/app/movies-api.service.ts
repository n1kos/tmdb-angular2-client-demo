import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  movies:number[] = [1,2,3,4,5,6]
  constructor() { }

  searchMovies() {
    console.log("searching");  
  }
  
  getMovies() {
    return this.movies
  }
}
