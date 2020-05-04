import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  /** Propiedad, DATA */
  product;

  /**
   * ActivatedRoute is INJECTED
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /** Methods */
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        /**
         * '+' casts to Number.
         * .get is a function that belongs to paramMap interface.
         */
        this.product = products[+params.get('productId')]
      })
  }

}