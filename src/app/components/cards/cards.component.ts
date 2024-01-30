import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() score: number = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  @Input() price: string = ''; //Math.floor(Math.random() * (1000 - 40 + 1)) + 40;

  constructor(private router: Router) {}

  goToDetails(): void {
    this.router.navigate([`/details/${this.title}`]);
  }
}
