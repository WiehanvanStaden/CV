import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProjects = {} as Project[];
  isBrowser = false;

  constructor(private titleService: Title, private projectsService: ProjectsService, @Inject(PLATFORM_ID) private platformId: Object) { 
    this.titleService.setTitle("Wiehan van Staden - Home");
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.featuredProjects = [this.projectsService.GetProjectById(1)]
  }
}
