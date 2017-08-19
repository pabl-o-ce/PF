import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, Products } from './../shared/data.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public model: Products;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.model = this.route.snapshot.data['products'];
  }

  public scrollToProduct(scrollTo: number) {
    const scroller = $('.products');
    scroller.animate({'scrollLeft': scrollTo}, 500);
  }

}
