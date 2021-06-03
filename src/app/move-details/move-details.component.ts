import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/model-common';

@Component({
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.sass']
})
export class MoveDetailsComponent implements OnInit {
  @Input() movie! : Movie

  constructor() { }

  ngOnInit(): void {
  }

}
