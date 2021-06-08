import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import {
  Movie,
  MovieCollection,
  MovieCollectionAdd,
} from "../../shared/models/model-common";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.sass"],
})
export class MovieListComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() movieCollections: MovieCollection[] = [];
  @Output() newMovieToCollectionEvent = new EventEmitter<MovieCollectionAdd>();

  constructor() {}

  saveToCollection(item: MovieCollectionAdd) {
    this.newMovieToCollectionEvent.emit(item);
  }

  ngOnInit(): void {}
}
