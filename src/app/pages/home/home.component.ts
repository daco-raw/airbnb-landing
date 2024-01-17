import { Component } from '@angular/core';
import { NavbarComponent } from '../../componenets/navbar/navbar.component';
import { FooterComponent } from '../../componenets/footer/footer.component';
import { CardsComponent } from '../../componenets/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  infoCard = [
    {
      title: 'wooden House, Florida',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
    {
      title: 'Miami Resort',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
    {
      title: 'Buenos Aires',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
    {
      title: 'Caracas / Venezuela',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
    {
      title: 'California Resort',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
    {
      title: 'CDMX',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
    },
  ];
}
