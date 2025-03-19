import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <div class="container">
      <a routerLink="/">
        <img class="image" src="Logo_au_petit_village.jpg" alt="Logo du site au petit village">
      </a>
      <nav class="links">
        <a routerLink="/home">Accueil</a>
        <a routerLink="/about">A propos</a>
      </nav>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
