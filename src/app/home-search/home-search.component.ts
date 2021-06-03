import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesApiService } from '../movies-api.service';
@Component({
  selector: 'home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.sass']
})
export class HomeSearchComponent implements OnInit {
  
  movies = this.apiService.getMovies()
  checkoutForm = this.formBuilder.group({
    name: '',
  });

  constructor(
    private apiService: MoviesApiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  searchMovies() {
    console.log("search")
  }
}
