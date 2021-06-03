import { Component, OnInit } from "@angular/core";
import { Movie } from "../../shared/models/model-common";
import { MoviesApiService } from "../../shared/services/movies-api.service";
@Component({
  selector: "home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.sass"],
})
export class HomeSearchComponent implements OnInit {
  movies: Movie[] = this.apiService.getMovies();

  constructor(private apiService: MoviesApiService) {}

  ngOnInit(): void {
    console.log(this.movies);
  }

  searchMovies(searchTerm: string | null = "") {
    console.log("search for", searchTerm);
    this.apiService.searchMovies(searchTerm).subscribe((data) => {
      //@ts-expect-error noda
      this.movies = data.results;
      console.log(data);
    });
    // this.movies = this.movies.filter((item) => item.title == searchTerm);
  }
}
