import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {}
