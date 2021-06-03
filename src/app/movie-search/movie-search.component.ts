import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-movie-search",
  templateUrl: "./movie-search.component.html",
  styleUrls: ["./movie-search.component.sass"],
})
export class MovieSearchComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();
  termInput = new FormControl();
  constructor() {}

  searchMovie(searchTerm: string) {
    // using without #prop in the template
    // this.newSearchEvent.emit(this.termInput.value)
    // console.log(this.termInput.value);

    //use with #prop in the template
    this.newSearchEvent.emit(searchTerm);
    // console.log(searchTerm);
  }

  ngOnInit(): void {}
}
