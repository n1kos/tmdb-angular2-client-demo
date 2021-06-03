import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Movie } from "../../shared/models/model-common";
import { MoviesApiService } from "../../shared/services/movies-api.service";
@Component({
  selector: "home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.sass"],
})
export class HomeSearchComponent implements OnInit {
  movies: Movie[] = this.apiService.getMovies();

  checkoutForm = this.formBuilder.group({
    name: "",
  });

  constructor(
    private apiService: MoviesApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.movies);
  }

  searchMovies(searchTerm: string | null = "") {
    console.log("search for", searchTerm);
    this.movies = this.movies.filter((item) => item.title == searchTerm);
  }
}
