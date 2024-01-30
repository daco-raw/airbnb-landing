import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  constructor() {}
}
