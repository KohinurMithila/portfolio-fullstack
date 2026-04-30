import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../core/services/skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private service: SkillService) {}

  ngOnInit() {
    this.service.getSkills().subscribe((res: any) => {
      this.skills = res;
    });
  }
}
