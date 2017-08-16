import { Component, OnInit } from '@angular/core';
import * as $ from  'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scrollToProduct(scrollTo: number) {
    const scroller = $('.products');
    scroller.animate({'scrollLeft': scrollTo}, 500);
  }

  public horizontalScroll() {

  }

}
