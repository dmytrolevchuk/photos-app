import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoStoreService } from '../../../../../shared/services/photo-store.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {

  photoId!: number;

  constructor(private route: ActivatedRoute, private store: PhotoStoreService) {}

  ngOnInit(): void {
    this.photoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  deletePhoto() {
    this.store.deletePhoto(this.photoId);
  }

}
