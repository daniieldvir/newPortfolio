import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { Experience } from '../../../../models/experience.model';
import { EXPERIENCE_UTIL } from '../../../../utils/experience.util';
import { ButtonArrow } from '../../../shared/button-arrow/button-arrow';
import { Card } from '../../../shared/card/card';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-experience-card',
  imports: [Card, RouterModule, NgIconComponent, ButtonArrow, NgClass],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  public readonly experience = signal<Experience[]>(EXPERIENCE_UTIL.slice(0, 4));
  protected readonly isDarkMode = signal(false);
}
