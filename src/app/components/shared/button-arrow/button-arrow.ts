import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-arrow',
  imports: [NgIconComponent, RouterModule],
  templateUrl: './button-arrow.html',
  styleUrl: './button-arrow.scss',
})
export class ButtonArrow {
  text = input.required<string>();
  icon = input.required<string>();
  path = input.required<string>();
}
