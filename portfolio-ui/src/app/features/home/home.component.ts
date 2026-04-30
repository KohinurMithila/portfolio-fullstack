import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../core/services/about.service';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  about: any = null;

  constructor(private service: AboutService) {}

  ngOnInit() {
    this.service.getAbout().subscribe((res: any) => {
      if (res && res.name) {
        this.about = res;
      }
    });
  }
}
