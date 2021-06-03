import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Movie } from "../../shared/models/model-common";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.sass"],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
