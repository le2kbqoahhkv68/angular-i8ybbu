import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /** Propiedad, DATA */
  items = [];

  /** Methods / Mutations ? */
  addToCart(product) {
    this.items.push(product);
    return this.items;
  }

  clearCart() {
    this.items.length = 0
    return this.items;
  }

  getItems() {
    return this.items;
  }

  /** Actions */
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }

}