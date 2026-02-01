import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Card } from '../../../shared/card/card';

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-profile-card',
  imports: [Card, NgClass],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  public readonly name = input<string>('Daniel Dvir');
  public readonly bio = input<string>('<strong>Frontend Developer</strong> with <strong>+4</strong> years of experience building user-focused, enterprise-grade web applications.<br/> I specialize in creating clean, scalable, and maintainable frontend solutions while working closely with product, design, and backend teams.');

  public readonly socialLinks = input<SocialLink[]>([
    {
      icon: 'fa-brands fa-linkedin-in',
      url: 'https://www.linkedin.com/in/daniiel-dvir-06154769/',
      label: 'LinkedIn profile'
    },
    {
      icon: 'fa-brands fa-github',
      url: 'https://github.com/daniieldvir',
      label: 'GitHub profile'
    }
  ]);

}
