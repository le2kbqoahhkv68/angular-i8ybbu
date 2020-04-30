import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  /** Input */
  @Input() product;

  /** Output */
  @Output() notify = new EventEmitter();
  
  /** Getters */
  get showNotifyMe(): boolean {
    return this.product.price > 700
  }

  constructor() { }
}