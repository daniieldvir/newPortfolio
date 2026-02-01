import { Component } from '@angular/core';
import { ExperienceCard } from './experience-card/experience-card';
import { ProfileCard } from './profile-card/profile-card';
import { ProjectsCard } from './projects-card/projects-card';
import { SkillsCard } from './skills-card/skills-card';

@Component({
  selector: 'app-home',
  imports: [ProfileCard, ExperienceCard, ProjectsCard, SkillsCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
