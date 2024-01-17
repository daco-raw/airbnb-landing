import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() value: string = '';
  @Input() score: number = Math.floor(Math.random() * (9 - 0 + 1) + 0);
}
