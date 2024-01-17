import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent, CardsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  infoCard = [
    {
      title: 'wooden House, Florida',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem odio quod eaque magni harum molestiae nesciunt blanditiis minus amet.d',
      url: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsfGVufDB8fDB8fHww',
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

// TODO: obtener datos desde api
