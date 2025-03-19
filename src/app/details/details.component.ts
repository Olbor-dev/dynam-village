import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  template: `
    <article class="container">
      <img class="image" [src]="product?.image">
      <div class="listing">
        <section class="details">
          <h2 class="details-name">{{product?.name}}</h2>
          <p class="details-description">{{product?.description}}</p>
          <p class="details-price">Prix {{product?.price}} €</p>
        </section>
        <section class="apply">
          <button class="apply-button" type="button" routerLink="/">Retour</button>
        </section>
      </div>
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
