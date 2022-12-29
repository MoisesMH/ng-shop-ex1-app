import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  // Inputs
  @Input() link: string;

  // Outputs
  @Output() goToLink = new EventEmitter<string>();

  // Data

  // constructor
  constructor() {
    this.link = 'hola';
  }

  // Computed

  // Methods

  handleLink() {
    this.goToLink.emit(this.link)
  }
  
}
