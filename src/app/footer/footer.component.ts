import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="container">
      <div class="links">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="facebook.png" alt="Logo facebook">
        </a>
        <a href="https://www.x.com/" target="_blank">
          <img src="twitter.png" alt="Logo X (twitter)">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="instagram.png" alt="Logo instagram">
        </a>
      </div>
      <div class="copyright">
        <p>Site créé en <time datetime="2025">2025</time> par Olivier Bordage <span>&#169;</span> angular</p>
      </div>
    </div>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
