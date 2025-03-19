import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  template: `
    <article>
      <img class="listing-image" [src]="product?.image">
      <section class="listing-detail">
        <h2 class="listing-name">{{product?.name}}</h2>
        <p class="listing-description">{{product?.description}}</p>
      </section>
      <section class="listing-features">
        <h2 class="listing-price">{{product?.price}}</h2>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Valider pour quitter</h2>
        <button class="primary" type="button" routerLink="/">Valider</button>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  product: Product | undefined;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.productsService.getProductById(productId);
  }
}
