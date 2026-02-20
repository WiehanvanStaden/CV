import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  model = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Wiehan van Staden - Contact Me');
  }

  sendMessage() {
    // simple mailto fallback; could be replaced with real API later
    const subject = encodeURIComponent('Message from ' + this.model.name);
    const body = encodeURIComponent(this.model.message + '\n\n--\n' + this.model.name + '\n' + this.model.email);
    window.location.href = `mailto:vanstadenwiehan@gmail.com?subject=${subject}&body=${body}`;
  }
}
