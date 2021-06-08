import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  Movie,
  MovieDetails,
  Rating,
} from "src/app/shared/models/model-common";
import { MoviesApiService } from "src/app/shared/services/movies-api.service";
import { RateResponse } from "src/app/shared/models/model-response";
import { FormControl } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.sass"],
})
export class PopUpModalComponent implements OnInit {
  disableSelect = new FormControl(false);
  movie?: MovieDetails;
  movieId?: number;
  postMessage = "";
  selectedRatings = { rate: 0 };
  ratings: Rating[] = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
  ];

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  async rate() {
    const RateResult: RateResponse = await this.apiService.rateMovies(0, 1);
    if (RateResult.success) {
      this.postMessage = "Rating successful";
    } else {
      this.postMessage = "Error in rating";
    }
  }

  onClose() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params["movie-id"], 10);
      this.apiService.gethMoviesDetails(this.movieId).subscribe((data) => {
        this.movie = data;
      });
    });
  }
}
