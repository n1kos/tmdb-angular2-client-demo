import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { HomeSearchComponent } from "./components/home-search/home-search.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { MovieCollectionsComponent } from "./components/movie-collections/movie-collections.component";
import { MovieCollectionsCreateComponent } from "./components/movie-collections-create/movie-collections-create.component";
import { MovieSearchComponent } from "./components/movie-search/movie-search.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    PageNotFoundComponent,
    MovieCollectionsComponent,
    MovieCollectionsCreateComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieDetailsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: "api_key", useValue: "85204a8cc33baf447559fb6d51b18313" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
