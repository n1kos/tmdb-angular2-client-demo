import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage";
import {
  Movie,
  MovieCollection,
  MovieDetails,
} from "src/app/shared/models/model-common";

@Component({
  templateUrl: "./movie-collections-details.component.html",
  styleUrls: ["./movie-collections-details.component.sass"],
})
export class MovieCollectionsDetailsComponent implements OnInit {
  movieCollections?: Movie[];
  collectionId?: number;

  constructor(
    private _localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.collectionId = parseInt(params["collection-id"], 10);
      const _movieCollections = this._localStorageService.get(
        "collections"
      ) as Array<MovieCollection>;
      console.log(_movieCollections);
      this.movieCollections = _movieCollections[this.collectionId].movies;
      console.log(this.movieCollections);
    });
  }
}
