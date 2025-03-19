import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-image" [src]="product.image" alt="Image de {{product.name}}">
      <div class="listing-infos">
        <h2 class="info-name">{{product.name}}</h2>
        <p class="info-price">{{product.price}}</p>
        <a [routerLink]="['/product', product.id]">Voir plus</a>
      </div>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
