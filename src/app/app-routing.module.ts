import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { PhotosListComponent } from "./components/photos-list/photos-list.component";

const routes: Routes = [
  {
    path: 'favorites',
    component: FavoritesListComponent
  },
  {
    path: '',
    component: PhotosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
