import { InvokeFunctionExpr } from "@angular/compiler";
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.sass"],
})
export class PaginationComponent implements OnInit {
  totalPages = [1];
  activePage = 1;
  @Input() pagesFeed!: number;
  @Output() newSearchEventWithPage = new EventEmitter<number>();
  constructor() {}
  gotoPage(page: number) {
    const faker = this.activePage - page;
    if (Math.abs(faker) == 1) {
      page = -1 * faker + this.activePage;
    }
    this.activePage = page;
    this.newSearchEventWithPage.emit(page);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.activePage = 1;
    this.totalPages = [1];
    for (let index = 2; index <= this.pagesFeed; index++) {
      this.totalPages.push(index);
    }
  }

  ngOnInit(): void {}
}