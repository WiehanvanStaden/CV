import { Component, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;
  isBrowser = false;
  
  constructor(public bsModalRef: BsModalRef, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
