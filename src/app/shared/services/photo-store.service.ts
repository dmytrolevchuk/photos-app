import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoStoreService {

  constructor() {}

  getDataFromLocalStorage() {
    let list: number[];
    let str: string | null;
    str = localStorage.getItem('favoriteList');
    if (str) {
      list = JSON.parse(str);
    } else {
      list = [];
    }

    return ([...list])
  }

  savePhoto(index: number): void {
    let favoriteList = this.getDataFromLocalStorage()
    if (!favoriteList.includes(index)) {
      favoriteList.push(index);
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
    }
  }

  deletePhoto(index: number) {
    let favoriteList = this.getDataFromLocalStorage().filter(i => i !== index);
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }
}
