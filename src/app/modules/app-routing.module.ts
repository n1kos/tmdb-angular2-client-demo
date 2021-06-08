import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSearchComponent } from "../components/home-search/home-search.component";
import { MovieCollectionsCreateComponent } from "../components/movie-collections-create/movie-collections-create.component";
import { MovieCollectionsComponent } from "../components/movie-collections/movie-collections.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { PopUpModalComponent } from "../components/popup/popup.component";
import { MovieCollectionsDetailsComponent } from "../components/movie-collections-details/movie-collections-details.component";

const routes: Routes = [
  { path: "", component: HomeSearchComponent },
  { path: "collections", component: MovieCollectionsComponent },
  { path: "collections-create", component: MovieCollectionsCreateComponent },
  {
    path: "movies/movie-details/:movie-id",
    component: PopUpModalComponent,
    outlet: "popup",
  },
  {
    path: "collections/collections-details/:collection-id",
    component: MovieCollectionsDetailsComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
