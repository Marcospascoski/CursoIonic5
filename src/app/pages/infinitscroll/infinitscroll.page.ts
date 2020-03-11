import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitscroll',
  templateUrl: './infinitscroll.page.html',
  styleUrls: ['./infinitscroll.page.scss'],
})
export class InfinitscrollPage implements OnInit {

  // tslint:disable-next-line: max-line-length
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

  limit = 12;
  constructor() { }

  ngOnInit() {
  }

  popularInfinite(inifiniteScrollEvent: any) {
    setTimeout(() => {
    console.log('carregar mais 12 itens');
    this.limit += 12;
    inifiniteScrollEvent.target.complete();
    }, 1000);
  }
}
