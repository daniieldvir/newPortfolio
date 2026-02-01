import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { Card } from '../../../shared/card/card';

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-profile-card',
  imports: [Card, NgClass, RouterModule, NgIconComponent],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  public readonly name = signal<string>('Daniel Dvir');
  public readonly bio = signal<string>('<strong>Frontend Developer</strong> with <strong>+4</strong> years of experience building user-focused, enterprise-grade web applications.<br/> I specialize in creating clean, scalable, and maintainable frontend solutions while working closely with product, design, and backend teams.');
  public readonly profileImageUrl = signal<string>(
    'https://res.cloudinary.com/disku3v4j/image/upload/v1646307805/daniiel/13726_10206525158264095_4610679800752306461_n_pg81m4.jpg'
  );

  public readonly socialLinks = signal<SocialLink[]>([
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

  public readonly contact = signal({
    email: 'daniieldvir2406@gmail.com',
    phone: '0545586006',
  });

}
