import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

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
  ) { }

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