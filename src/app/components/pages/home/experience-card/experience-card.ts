import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { ButtonArrow } from '../../../shared/button-arrow/button-arrow';
import { Card } from '../../../shared/card/card';

export interface Experience {
  year: string;
  company: string;
  role: string;
  logo: string;
  logoBg?: string;
}

@Component({
  selector: 'app-experience-card',
  imports: [Card, RouterModule, NgIconComponent, ButtonArrow],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  protected readonly isDarkMode = signal(false);

  public readonly experience = signal<Experience[]>([
    {
      year: '2022-2026',
      company: 'Kramer Electronics',
      role: 'Frontend Developer',
      logo: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769951107/daniiel/download_wv2yhl.jpg',
    },
    {
      year: '2021-2022',
      company: 'Freelance',
      role: 'Web developer, marketing and data analysis',
      logo: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769950502/daniiel/freelance_self_employed_occitanie_logo_kirsyr.jpg',
    },
    {
      year: '2019-2021',
      company: 'Blanco Advertising',
      role: 'Head of Digital Marketing & Data Analyst',
      logo: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769950475/daniiel/Blanco_Logo_Circle_White_njdyu5.avif',
      logoBg: '#000000',
    },
    {
      year: '2016-2019',
      company: 'Publicis Media',
      role: 'Senior User Acquisition,',
      logo: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769950460/daniiel/publicismedia_logo_r4z6xk.jpg',
    },
  ]);

}
