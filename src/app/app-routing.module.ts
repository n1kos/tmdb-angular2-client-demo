import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSearchComponent } from "./home-search/home-search.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieCollectionsCreateComponent } from "./movie-collections-create/movie-collections-create.component";
import { MovieCollectionsComponent } from "./movie-collections/movie-collections.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeSearchComponent },
  { path: "collections", component: MovieCollectionsComponent },
  { path: "collections-create", component: MovieCollectionsCreateComponent },
  { path: "movie-details/:movie-id", component: MovieDetailsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
