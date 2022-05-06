import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoStoreService } from '../../shared/services/photo-store.service';
import { fromEvent, Subscription } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  mockedList: number[];
  amount: number = 15;
  showLoading: boolean = false;
  scrollSub!: Subscription;

  constructor(private store: PhotoStoreService) {
    this.mockedList = Array(this.amount).fill(0).map((x,i)=>i);
  }

  ngOnInit() {
    this.scrollSub = fromEvent(window, 'scroll').pipe(
      debounceTime(300),
      tap(() => this.checkScrolling())
    ).subscribe();
  }

  checkScrolling(): void {
    const fullHeight = (this.amount/3) * 300 + 50;
    if ( window.scrollY + window.outerHeight > fullHeight) {
      this.loadPhotos();
    }
  }

  savePhoto(index: number) {
    this.store.savePhoto(index);
  }

  loadPhotos(): void {
    this.showLoading = true;
    let timer = Math.floor(Math.random() * (100) + 200);
    setTimeout(() => {
      for (let i = this.amount; i < this.amount + 15; i++) {
        this.mockedList.push(i);
      }
      this.amount = this.mockedList.length;
      this.showLoading = false;
    }, timer);
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }
}
