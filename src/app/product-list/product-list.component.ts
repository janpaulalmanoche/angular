import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products2 = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  sayHi() {
    alert('hi');
  }
  onNotify(price:number) {
    window.alert(`You will be notified when the product goes on sale ${price}` );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
