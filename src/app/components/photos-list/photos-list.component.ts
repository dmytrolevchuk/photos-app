import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent {
  mockedList: number[];
  amount: number = 10;

  constructor() {
    this.mockedList = Array(this.amount).fill(0).map((x,i)=>i);
  }

  savePhoto(index: number) {
    console.log(index);
  }
}
