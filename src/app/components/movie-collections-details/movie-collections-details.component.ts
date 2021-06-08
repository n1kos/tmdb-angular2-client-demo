import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  Movie,
  MovieCollection,
  MovieDetails,
} from "src/app/shared/models/model-common";
import { GenericPopupComponent } from "../generic-popup/generic-popup.component";
import { MovieDetailsComponent } from "../movie-details/movie-details.component";

@Component({
  templateUrl: "./movie-collections-details.component.html",
  styleUrls: ["./movie-collections-details.component.sass"],
})
export class MovieCollectionsDetailsComponent implements OnInit {
  _movieCollections: MovieCollection[] = [];
  movieCollections?: Movie[];
  collectionId = -1;
  // destroy = new Subject<any>();
  // currentDialog: MatDialogRef<any> | null = null;
  constructor(
    private _localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    public matDialog: MatDialog
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
