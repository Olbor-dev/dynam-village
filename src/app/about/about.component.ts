import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <div class="container">
      <h2>Au petit village</h2>
      <article class="story">
        <h3>Historique de l'entreprise</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula vel ligula sit amet tincidunt. 
          Morbi ut porta arcu. Aliquam in lectus aliquet, feugiat est at, luctus ligula. Duis ultricies felis purus, 
          quis rhoncus quam dapibus at. Etiam eleifend nunc ut lorem varius, non egestas lectus mollis. Interdum et 
          malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur tortor id lacus dapibus scelerisque.
        </p>
      </article>
      <article class="now">
        <h3>Aujourd'hui</h3>
        <p>
          Duis quis rhoncus erat, vitae efficitur nibh. Suspendisse malesuada elementum ipsum, eu feugiat orci. 
          Morbi nec quam sit amet nisl ullamcorper accumsan vel ut mi. Pellentesque pharetra semper eros, sed 
          consectetur magna imperdiet sed. Proin lobortis porta finibus. Nam at dignissim augue, nec pulvinar eros. 
          Cras nec nisl vitae massa molestie rutrum ut in leo. In vitae fringilla massa. Duis nec risus tellus.
        </p>
      </article>
    </div>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
