import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { PhotosListComponent } from "./components/photos-list/photos-list.component";

const routes: Routes = [
  {
    path: 'favorites',
    component: FavoritesListComponent,
  },
  {
    path: 'photos/:id',
    loadChildren: () => import('./feature/modules/single-photo/single-photo.module').then(m => m.SinglePhotoModule),
  },
  {
    path: '',
    component: PhotosListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
