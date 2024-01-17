import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() value: string = '';
  @Input() url_img: string | any = ''; // FIXME: any delete
  @Input() score: number = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  @Input() price = Math.floor(Math.random() * (1000 - 40 + 1)) + 40;
}
