import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /** Propiedad, DATA */
  items = [];

  /** Methods */
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

  constructor() { }

}