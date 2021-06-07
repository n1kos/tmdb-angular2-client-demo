import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  Movie,
  MovieCollection,
  MovieDetails,
} from "src/app/shared/models/model-common";
import { MovieDetailsComponent } from "../movie-details/movie-details.component";

@Component({
  templateUrl: "./movie-collections-details.component.html",
  styleUrls: ["./movie-collections-details.component.sass"],
})
export class MovieCollectionsDetailsComponent implements OnInit {
  movieCollections?: Movie[];
  collectionId?: number;
  destroy = new Subject<any>();
  currentDialog: MatDialogRef<any> | null = null;
  constructor(
    private _localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    matDialog: MatDialog
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {
      if (this.currentDialog) {
        this.currentDialog.close();
      }
      this.currentDialog = matDialog.open(MovieDetailsComponent, {
        data: { movie: 1 },
      });
      this.currentDialog.afterClosed().subscribe((result) => {
        console.log("result");
        // router.navigateByUrl("/");
      });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.collectionId = parseInt(params["collection-id"], 10);
      const _movieCollections = this._localStorageService.get(
        "collections"
      ) as Array<MovieCollection>;
      this.movieCollections = _movieCollections[this.collectionId].movies;
    });
  }
}
