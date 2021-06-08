import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import {
  Movie,
  MovieCollection,
  MovieCollectionAdd,
} from "../../shared/models/model-common";
import { GenericPopupComponent } from "../generic-popup/generic-popup.component";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.sass"],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() movieCollections: MovieCollection[] = [];
  @Output() notify = new EventEmitter();
  @Output() saveToCollection = new EventEmitter();
  belongsToCollection = false;

  constructor(public dialog: MatDialog) {}
  // removefromCollection() {}
  openDialog(): void {
    const dialogRef = this.dialog.open(GenericPopupComponent, {
      width: "50%",
      data: { dataType: "collections", data: this.movieCollections },
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        const resultz = {
          collectionIndex: result,
          movie: { id: this.movie.id || 0, title: this.movie.title },
        };
        console.log("The dialog was closed", resultz);
        this.saveToCollection.emit(resultz);
      }
    });
  }

  ngOnInit(): void {
    const m = this.movie;
    const ml = this.movieCollections;
    if (
      ml.filter((collection) => {
        return collection.movies.find((inMovie) => inMovie.id == m.id);
      }).length
    ) {
      this.belongsToCollection = true;
    }
  }
}
