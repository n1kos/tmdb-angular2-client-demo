import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { MovieCollection } from "src/app/shared/models/model-common";

@Component({
  templateUrl: "./movie-collections.component.html",
  styleUrls: ["./movie-collections.component.sass"],
})
export class MovieCollectionsComponent implements OnInit {
  movieCollections: MovieCollection[] = [];
  constructor(private _localStorageService: LocalStorageService) {}

  removeCollection(ofIndex: number) {
    this.movieCollections.splice(ofIndex, 1);
    this._localStorageService.add("collections", this.movieCollections);
  }

  ngOnInit(): void {
    this.movieCollections = this._localStorageService.get("collections") || [];
  }
}
