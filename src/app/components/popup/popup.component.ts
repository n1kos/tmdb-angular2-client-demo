import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from "src/app/shared/models/model-common";
import { MoviesApiService } from "src/app/shared/services/movies-api.service";
@Component({
  templateUrl: "./popup.component.html",
})
export class PopUpModalComponent implements OnInit {
  movie?: Movie;
  movieId?: number;
  private sub: any;
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
