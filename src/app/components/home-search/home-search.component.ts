import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { alphaMin3 } from "src/app/directives/alphaMin3";
import { Movie, MovieCollection } from "../../shared/models/model-common";
import { MoviesApiService } from "../../shared/services/movies-api.service";
import { PageEvent } from "@angular/material/paginator";
import { LocalStorageService } from "angular-2-local-storage";

@Component({
  selector: "home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.sass"],
})
export class HomeSearchComponent implements OnInit {
  movies: Movie[] = this.apiService.getMovies();
  movieCollections: MovieCollection[] =
    this._localStorage.get("collections") || [];
  firstLastButtons = true;
  pnDisabled = true;
  hdPageSize = true;
  pgIndex = 2;
  total_results = 0;
  pages = 1;
  form: FormGroup;

  constructor(
    private apiService: MoviesApiService,
    private fb: FormBuilder,
    private _localStorage: LocalStorageService
  ) {
    this.form = this.fb.group({
      childForm1: "",
      searchMovie: ["", [Validators.required, alphaMin3()]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  onChangePage(pageChange: PageEvent) {
    this.searchMovies(
      this.form.controls.searchMovie.value,
      pageChange.pageIndex + 1
    );
  }

  alertMe() {
    alert("fwefwef");
  }

  searchMovies(searchTerm: string | null = "", page = 1) {
    this.apiService.searchMovies(searchTerm, page).subscribe((data) => {
      this.movies = data.results;
      this.pages = data.total_pages || 1;
      this.total_results = data.total_results;
    });
  }
}
