import { Component, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isBrowser: boolean;

  // Data-driven resume sections
  skillCategories = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
    { category: 'Frameworks', items: ['Angular', 'Node.js'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'Sass', 'Bootstrap'] },
    { category: 'Tools', items: ['Git', 'Jest', 'ESLint'] }
  ];

  experiences = [
    {
      title: 'Junior Software Developer',
      company: 'StarTech Group',
      period: 'Oct 2025 - Jan 2026',
      bullets: [
        'Maintained existing web applications using Angular and TypeScript, improving performance.',
        'Collaborated with team on development on new apps.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Digital Pulse SA',
      period: 'Apr 2025 - Oct 2025',
      bullets: [
        'Developed new websites for clients '
      ]
    },
  ];

  education = [
    {
      degree: 'Diplpoma in Software Development',
      institution: 'Vaal University of Technology',
      period: 'Jan 2020 - Dec 2024',
      notes: 'Relevant coursework: Data structures, application development.'
    },
    {
      degree: 'Higher Certificate in Information Technology',
      institution: 'CTI Education Group',
      period: 'Jan 2017 - Nov 2018',
      notes: 'Focused on programming fundamentals and web development.'
    },
  ];

  certifications = [
    { title: 'The Complete Flutter Guide: Build Android, iOS, Web & Desktop Apps', issuer: 'Udemy', date: ' Jan 2026 ' },
    { title: 'IT Essentials, Routing and Switching', issuer: 'Cisco Networking Academy', date: ' Nov 2020 ' },
    { title: 'Introduction to Networking', issuer: 'Cisco Networking Academy', date: ' Nov 2021' },
    { title: 'Introduction to Artificial Intelligence (AI)', issuer: 'Coursera', date: ' Nov 2023' },
    { title: 'Introduction to Probability and Data with R', issuer: 'Coursera', date: ' Nov 2023' },
    { title: 'Big Data Emerging Technologies', issuer: 'Coursera', date: ' Nov 2023' },
  ];
  
  constructor(private titleService: Title, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.titleService.setTitle("Wiehan van Staden - Resume ");
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  DownloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/CV/Wiehan_CV.pdf'); // ensure file exists
    link.setAttribute('download', 'Wiehan_van_Staden_Resume.pdf');
    link.click();
    link.remove();
  }
}
