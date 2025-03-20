import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected productsList: Product[] = [
    {
      id: 0,
      name: "Astérix",
      description: "Figurine représentant Asterix. Hauteur 12 cm.",
      image: "/Asterix.jpeg",
      price: 15.49
    },
    {
      id: 1,
      name: "Obélix",
      description: "Figurine représentant Obelix. Hauteur 14 cm.",
      image: "/Obelix.jpeg",
      price: 17.99
    },
    {
      id: 2,
      name: "Panoramix",
      description: "Figurine représentant Panoramix. Hauteur 13 cm.",
      image: "/Panoramix.jpeg",
      price: 18.79
    },
    {
      id: 3,
      name: "Abraracourcix",
      description: "Figurine représentant Abraracourcix. Hauteur 18 cm.",
      image: "/Abraracourcix.jpeg",
      price: 21.29
    },
    {
      id: 4,
      name: "Assurancetourix",
      description: "Figurine représentant Assurancetourix. Hauteur 12 cm.",
      image: "/Assurancetourix.jpeg",
      price: 11.49
    },
    {
      id: 5,
      name: "César",
      description: "Figurine représentant César. Hauteur 14 cm.",
      image: "/Cesar.jpeg",
      price: 13.99
    },
    {
      id: 6,
      name: "Romains",
      description: "Figurine représentant des Romains. Hauteur 13 cm.",
      image: "/Romains.jpeg",
      price: 18.79
    },
    {
      id: 7,
      name: "Bonhemine",
      description: "Figurine représentant Bonemine. Hauteur 10 cm.",
      image: "/Bonemine.jpeg",
      price: 14.29
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
