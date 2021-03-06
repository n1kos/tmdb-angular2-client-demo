import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { MovieCollection } from "src/app/shared/models/model-common";

@Component({
  selector: "app-movie-collections-create",
  templateUrl: "./movie-collections-create.component.html",
  styleUrls: ["./movie-collections-create.component.sass"],
})
export class MovieCollectionsCreateComponent implements OnInit {
  movieCollections: MovieCollection[] = [];
  movieCollecion: MovieCollection = {
    title: "",
    description: "",
    movies: [
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
      // { title: "title", id: 1 },
    ],
  };
  responseMessage = "";
  constructor(private _localStorageService: LocalStorageService) {}

  onAddCollection() {
    this.movieCollections.push(this.movieCollecion);
    this._localStorageService.remove("collections");
    this._localStorageService.add("collections", this.movieCollections);
    this.responseMessage = "Collection Added!";
  }

  ngOnInit(): void {
    this.movieCollections = this._localStorageService.get("collections") || [];
  }
}
