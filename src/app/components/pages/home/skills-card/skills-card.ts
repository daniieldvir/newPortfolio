import { Component, signal } from '@angular/core';
import { Card } from '../../../shared/card/card';

@Component({
  selector: 'app-skills-card',
  imports: [Card],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.scss',
})
export class SkillsCard {
  public readonly skills = signal([
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue.js' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'SASS/SCSS' },
    { name: 'Responsive Design' },
    { name: 'NGXS' },
    { name: 'RxJS' },
    { name: 'REST APIs' },
    { name: 'Git' },
    { name: 'Node.js' },
  ]);


}
