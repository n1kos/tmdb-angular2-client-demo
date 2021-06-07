import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Movie, Rating } from "src/app/shared/models/model-common";
import { MoviesApiService } from "src/app/shared/services/movies-api.service";
import { RateResponse } from "src/app/shared/models/model-response";
@Component({
  templateUrl: "./popup.component.html",
})
export class PopUpModalComponent implements OnInit {
  movie?: Movie;
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
    private router: Router,
    private apiService: MoviesApiService,
    private route: ActivatedRoute
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
    this.router.navigate([{ outlets: { popup: null } }]);
  }
  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params["movie-id"], 10);
      this.apiService.gethMoviesDetails(this.movieId).subscribe((data) => {
        this.movie = data;
        console.log(this.movie);
      });
    });
  }
}
