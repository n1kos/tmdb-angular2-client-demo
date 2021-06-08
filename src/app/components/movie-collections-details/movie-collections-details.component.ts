import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage";
import { Movie, MovieCollection } from "src/app/shared/models/model-common";
import { GenericPopupComponent } from "../generic-popup/generic-popup.component";

@Component({
  templateUrl: "./movie-collections-details.component.html",
  styleUrls: ["./movie-collections-details.component.sass"],
})
export class MovieCollectionsDetailsComponent implements OnInit {
  _movieCollections: MovieCollection[] = [];
  movieCollections?: Movie[];
  collectionId = -1;
  constructor(
    private _localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    public matDialog: MatDialog,
    public router: Router
  ) {}

  removefromCollection(movieId = 0) {
    const movieToDelete = this.movieCollections?.findIndex(
      (movie) => movie.id == movieId
    );
    if (movieToDelete && movieToDelete >= 0) {
      this._movieCollections[this.collectionId].movies.splice(1, 1);
    }
    this._localStorageService.set("collections", this._movieCollections);
  }

  gotoThere(moveiId = 0) {
    this.router.navigateByUrl(`/(popup:movies/movie-details/${moveiId})`);
  }

  openDialog(index = 0): void {
    const dialogRef = this.matDialog.open(GenericPopupComponent, {
      width: "50%",
      data: { dataType: "movies", data: { movieId: index } },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.collectionId = parseInt(params["collection-id"], 10);
      this._movieCollections = this._localStorageService.get(
        "collections"
      ) as Array<MovieCollection>;
      this.movieCollections = this._movieCollections[this.collectionId].movies;
    });
  }
}
