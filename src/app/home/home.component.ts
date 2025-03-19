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
    <div class="container">
      <section class="home">
        <p>Bienvenue !</p>
        <h2>Au petit village</h2>
        <p>Petite entreprise de confection de figurines inspirées de la bande dessinée Astérix et Obélix.</p>
      </section>
      <section class="catalog">
        <h2>Catalogue des figurines</h2>
        <div class="catalog-active">
          <div class="active-sort">
            <label>Trié par : </label>
            <select [(ngModel)]="sortOrder">
              <option value="asc">Prix croissant</option>
              <option value="dsc">Prix décroissant</option>
            </select>
          </div>
          <div class="active-search">
            <label> Recherche : </label>
            <input type="text" [(ngModel)]="searchText" placeholder="Rechercher un produit par nom ..." />
          </div>
        </div>
        <div class="listing-products">
          <app-product *ngFor="let product of productList | filterByName: searchText | sortByPrice: sortOrder" [product]="product"></app-product>
        </div>
      </section>
    </div>
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
