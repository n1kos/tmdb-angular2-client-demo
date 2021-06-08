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
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GenericPopupComponent, {
      width: "250px",
      data: { name: this.movieCollections },
    });

    dialogRef.afterClosed().subscribe((result: MovieCollectionAdd) => {
      const resultz = {
        collectionIndex: 1,
        movie: { id: this.movie.id || 0, title: this.movie.title },
      };
      console.log("The dialog was closed", resultz);
      this.saveToCollection.emit(resultz);
    });
  }

  ngOnInit(): void {}
}
