import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected productsList: Product[] = [
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

  constructor() { }

  getAllProducts() : Product [] {
    return this.productsList;
  }

  getProductById(id: Number) : Product | undefined {
    return this.productsList.find(product => product.id === id);
  }
}
