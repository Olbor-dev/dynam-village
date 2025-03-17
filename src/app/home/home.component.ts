import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product';

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
  productList: Product[] = [
    {
      id: 0,
      name: "Asterix",
      description: "Figurine représentant Asterix. Hauteur 12 cm.",
      image: "/asterix.png",
      price: 15.49
    },
    {
      id: 1,
      name: "Obelix",
      description: "Figurine représentant Obelix. Hauteur 14 cm.",
      image: "/obelix.png",
      price: 17.99
    },
    {
      id: 2,
      name: "Idefix",
      description: "Figurine représentant Idefix. Hauteur 4 cm.",
      image: "/idefix.png",
      price: 8.79
    },
    {
      id: 3,
      name: "Falbala",
      description: "Figurine représentant Falbala. Hauteur 11 cm.",
      image: "/falbala.png",
      price: 13.29
    }
  ];
}
