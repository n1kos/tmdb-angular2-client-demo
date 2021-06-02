import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoveDetailsComponent } from './move-details/move-details.component';
import { MovieCollectionsComponent } from './movie-collections/movie-collections.component';
import { MovieCollectionsCreateComponent } from './movie-collections-create/movie-collections-create.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    PageNotFoundComponent,
    MoveDetailsComponent,
    MovieCollectionsComponent,
    MovieCollectionsCreateComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
