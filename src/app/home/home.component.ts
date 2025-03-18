import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductComponent],
  template: `
    <p>
      home works!
    </p>
    <section>
      <app-product *ngFor="let product of productList" [product]="product"></app-product>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList: Product[] = [];
  productsService: ProductsService = inject (ProductsService);

  constructor() {
    this.productList = this.productsService.getAllProducts();
  }
}
