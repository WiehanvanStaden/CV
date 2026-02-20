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
    { name: 'HTML & CSS', percent: 95, level: 'Expert', color: '#e34f26' },
    { name: 'Python', percent: 70, level: 'Intermediate', color: '#306998' }
  ];

  frameworks = [
    { name: 'Angular', percent: 90, level: 'Expert', color: '#dd0031' },
    { name: 'React', percent: 60, level: 'Intermediate', color: '#61dafb', textColor: '#000' },
    { name: 'Node.js', percent: 82, level: 'Advanced', color: '#68a063' }
  ];

  constructor(private titleService: Title) { 
    this.titleService.setTitle("Wiehan van Staden - Languages");
  }
} 
