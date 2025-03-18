import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductComponent, FormsModule, SortByPricePipe, FilterByNamePipe],
  template: `
    <section>
      <h2>Catalogue produits</h2>
      <select [(ngModel)]="sortOrder">
        <option value="asc">Prix croissant</option>
        <option value="dsc">Prix décroissant</option>
      </select>
      <input type="text" [(ngModel)]="searchText" placeholder="Rechercher un produit par nom ..." />
      <app-product *ngFor="let product of productList | filterByName: searchText | sortByPrice: sortOrder" [product]="product"></app-product>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchText: string = '';
  sortOrder: string = 'asc';
  productList: Product[] = [];
  productsService: ProductsService = inject (ProductsService);

  constructor() {
    this.productList = this.productsService.getAllProducts();
  }
}
