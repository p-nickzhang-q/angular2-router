import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.params['id'];
        if (id == 1) {
            return new Product(1, 'iPhone');
        } else {
            this.router.navigate(['/home']);
        }
    }

}