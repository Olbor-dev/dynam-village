import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <div>
      <a routerLink="/">
        <img src="Logo_au_petit_village.jpg" alt="Logo du site au petit village">
      </a>
    </div>
    <nav>
      <a routerLink="/home">Accueil</a>
      <a routerLink="/about">A propos</a>
    </nav>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
