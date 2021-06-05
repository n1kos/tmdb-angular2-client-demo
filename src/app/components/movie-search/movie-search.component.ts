import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-movie-search",
  templateUrl: "./movie-search.component.html",
  styleUrls: ["./movie-search.component.sass"],
})
export class MovieSearchComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();
  @Input() form!: FormGroup;
  constructor() {}

  searchMovie() {
    // using without #prop in the template
    // this.newSearchEvent.emit(this.termInput.value)
    // console.log(this.termInput.value);

    //use with #prop in the template
    this.newSearchEvent.emit();
    // console.log(searchTerm);
  }

  ngOnInit(): void {}
}
