import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  public scrollToProduct(scrollTo: number) {
    const scroller = $('.products');
    scroller.animate({'scrollLeft': scrollTo}, 500);
  }

  public horizontalScroll() {

  }

}
