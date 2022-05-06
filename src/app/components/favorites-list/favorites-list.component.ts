import { Component } from '@angular/core';
import { PhotoStoreService } from '../../shared/services/photo-store.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {

  favoritePhotos: number[] | null;

  constructor(private store: PhotoStoreService) {
    this.favoritePhotos = [...store.getDataFromLocalStorage()];
  }
}
