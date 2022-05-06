import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePhotoRoutingModule { }
