import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillService } from '../../../core/services/skill.service';

@Component({
    selector: 'app-admin-skills',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-skills.component.html'
})
export class AdminSkillsComponent implements OnInit {

    skills: any[] = [];
    form: any = {};
    editingId: number | null = null;

    constructor(private service: SkillService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getSkills().subscribe((res: any) => {
            this.skills = res;
        });
    }

    submit() {
        if (this.editingId) {
            this.service.updateSkill(this.editingId, this.form)
                .subscribe(() => this.load());
        } else {
            this.service.createSkill(this.form)
                .subscribe(() => this.load());
        }

        this.form = {};
        this.editingId = null;
    }

    edit(s: any) {
        this.form = { ...s };
        this.editingId = s.id;
    }

    delete(id: number) {
        this.service.deleteSkill(id)
            .subscribe(() => this.load());
    }
}