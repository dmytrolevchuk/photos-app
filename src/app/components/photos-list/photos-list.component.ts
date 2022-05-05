import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  mockedList: number[];
  amount: number = 10;
  showLoading: boolean = false;
  scrollSub!: Subscription;

  constructor() {
    this.mockedList = Array(this.amount).fill(0).map((x,i)=>i);
  }

  ngOnInit() {
    this.scrollSub = fromEvent(window, 'scroll').pipe(
      debounceTime(1000),
      tap(() => this.checkScrolling())
    ).subscribe();
  }

  checkScrolling(): void {
    const fullHeight = (this.amount/2) * 300 + 50;
    if ( window.scrollY + window.outerHeight > fullHeight) {
      this.loadPhotos();
    }
  }

  savePhoto(index: number) {
    console.log(index);
  }

  loadPhotos(): void {
    this.showLoading = true;
    let timer = 3000;
    setTimeout(() => {
      for (let i = this.amount; i < this.amount + 10; i++) {
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
