import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';
import { SinglePhotoRoutingModule } from './single-photo.routing';

@NgModule({
  declarations: [ SinglePhotoComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    SinglePhotoRoutingModule
  ]
})
export class SinglePhotoModule { }
