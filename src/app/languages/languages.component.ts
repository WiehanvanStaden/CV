import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages = [
    { name: 'TypeScript', percent: 92, level: 'Expert', color: '#007acc' },
    { name: 'JavaScript', percent: 88, level: 'Advanced', color: '#f0db4f', textColor: '#000' },
    { name: 'HTML & CSS', percent: 50, level: 'Expert', color: '#e34f26' },
    { name: 'Python', percent: 70, level: 'Intermediate', color: '#306998' },
    { name: 'Dart', percent: 40, level: 'Beginner', color: '#00B4AB' },
    { name: 'Java', percent: 40, level: 'Beginner', color: '#b07219' },
    { name: 'SQL', percent: 75, level: 'Advanced', color: '#e38c00' },
    { name: 'C#', percent: 30, level: 'Beginner', color: '#178600'},
    { name: 'Visual Basic', percent: 75, level: 'Beginner', color: '#2d78c4' },
    { name: 'PHP', percent: 25, level: 'Beginner', color: '#777bb4' }
  ];

  frameworks = [
    { name: 'Angular', percent: 90, level: 'Expert', color: '#dd0031' },
    { name: 'React', percent: 60, level: 'Intermediate', color: '#61dafb', textColor: '#000' },
    { name: 'Node.js', percent: 82, level: 'Advanced', color: '#68a063' },
    { name: 'Flutter', percent: 75, level: 'Advanced', color: '#cc6699' },
    { name: 'Bootstrap', percent: 80, level: 'Advanced', color: '#563d7c' },
    { name: 'Expo', percent: 70, level: 'Intermediate', color: '#000000' },

  ];

  tools = [
    { name: 'Angular CLI', percent: 90, level: 'Expert', color: '#dd0031' },
    { name: 'Git', percent: 85, level: 'Advanced', color: '#f34f29' },
    { name: 'Vs Code', percent: 80, level: 'Advanced', color: '#007acc' },
    { name: 'Android Studio', percent: 70, level: 'Intermediate', color: '#3ddc84' },
    { name: 'Figma', percent: 60, level: 'Intermediate', color: '#f24e1e' },
    { name: 'Jira', percent: 50, level: 'Intermediate', color: '#0052cc' },
    { name: 'Visual Studio', percent: 40, level: 'Beginner', color: '#0079bf' }
  ];

  animate = false;

  constructor(private titleService: Title) { 
    this.titleService.setTitle("Wiehan van Staden - Languages");
  }

  ngAfterViewInit() {
    setTimeout(() => this.animate = true, 50);
  }
} 
