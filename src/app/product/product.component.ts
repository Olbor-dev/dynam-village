import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-img" [src]="product.image" alt="Image de {{product.name}}">
      <h2 class="listing-name">{{product.name}}</h2>
      <p class="listing-price">{{product.price}}</p>
      <a [routerLink]="['/product', product.id]">Voir plus</a>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
