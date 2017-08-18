import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from './../shared/data.service';
import { Product, Products } from './../shared/data.interface';

@Injectable()
class MenuResolve implements Resolve<Products> {

  constructor (private router: Router, private dataService: DataService) { }

  public resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products> {
    // NProgress.start();
    return this.dataService.getProducts().map(
      (products: Products) => {
        // NProgress.done();
        return products;
      }).catch((error) => {
        // NProgress.done();
        this.router.navigate(['/']);
        return Observable.throw(error);
      });
  }
}

export { MenuResolve };
