import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { alphaMin3 } from "src/app/directives/alphaMin3";
import { Movie } from "../../shared/models/model-common";
import { MoviesApiService } from "../../shared/services/movies-api.service";
@Component({
  selector: "home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.sass"],
})
export class HomeSearchComponent implements OnInit {
  movies: Movie[] = this.apiService.getMovies();
  form: FormGroup;

  constructor(private apiService: MoviesApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      childForm1: "",
      searchMovie: ["", [Validators.required, alphaMin3()]],
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  get f() {
    return this.form.controls;
  }

  searchMovies(searchTerm: string | null = "", page = 1) {
    console.log("search for", searchTerm);
    this.apiService.searchMovies(searchTerm, page).subscribe((data) => {
      //@ts-expect-error noda
      this.movies = data.results;
      console.log(data);
    });
    // this.movies = this.movies.filter((item) => item.title == searchTerm);
  }
}
