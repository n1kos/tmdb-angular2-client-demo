import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { Movie } from '../models/model-common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})

export class MovieListComponent implements OnInit {
  
  @Input() movie! : Movie

  constructor() { }

  ngOnInit(): void {
  }

}
