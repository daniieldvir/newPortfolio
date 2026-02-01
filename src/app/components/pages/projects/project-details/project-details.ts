import { Component, input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { Project } from '../../../../models/project.model';
import { Card } from '../../../shared/card/card';

@Component({
  selector: 'app-project-details',
  imports: [Card, NgIconsModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  readonly project = input<Project | null>(null);

}
