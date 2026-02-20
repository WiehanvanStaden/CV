import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  project: Project[] = [
    //placeholder data replace with my own projects later on.
      {id: 0, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 1, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 2, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 3, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 4, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 5, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},
      {id: 6, name: 'Practice Flutter App', description: 'Test Description', summary: 'This is a test project to showcase my skills in Flutter development.', projectLink: '', pictures: ["/assets/1.png", "/assets/2.png", "/assets/3.png"], tags: [Tag.ANGULAR, Tag.TYPE_SCRIPT]},

    ]
  constructor() { }

  GetProjects(id: number): Project[] {
    return this.project;
  }
  GetProjectById(id: number) : Project{
    let project = this.project.find(p => p.id === id);

    if (project === undefined) {
      throw new Error("Project not found");
    }
    return project;
  }
}