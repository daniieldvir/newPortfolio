import { Component } from '@angular/core';
import { select } from '@ngxs/store';
import { ProjectsSelectors } from '../../../state/projects/projects.selectors';
import { Card } from '../../shared/card/card';
import { ProjectDetails } from './project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [Card, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = select(ProjectsSelectors.slices.projects);
}
