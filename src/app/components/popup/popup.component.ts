import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Movie, Rating } from "src/app/shared/models/model-common";
import { MoviesApiService } from "src/app/shared/services/movies-api.service";
@Component({
  templateUrl: "./popup.component.html",
})
export class PopUpModalComponent implements OnInit {
  movie?: Movie;
  movieId?: number;
  selectedRatings = {rate:0};
  ratings: Rating[] = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
  ];
  constructor(
    private router: Router,
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

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
