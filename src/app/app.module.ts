import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatListModule } from '@angular/material/list';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosListComponent,
    FavoritesListComponent,
    SinglePhotoComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
