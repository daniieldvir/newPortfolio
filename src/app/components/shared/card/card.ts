import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: {
    '[style.--card-padding]': 'padding()',
    '[style.--card-radius]': 'radius()',
    '[style.--card-bg]': 'background()',
  }
})
export class Card {
  padding = input<string>('32px');
  radius = input<string>('24px');
  background = input<string>('#ffffff');
}
