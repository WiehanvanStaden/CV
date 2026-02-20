import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  project = {} as Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService) { 
    this.titleService.setTitle("Wiehan van Staden - Portfolio");
  }
  ngOnInit(): void {
    this.project = this.projectsService.GetProjects(0);
  }
}
