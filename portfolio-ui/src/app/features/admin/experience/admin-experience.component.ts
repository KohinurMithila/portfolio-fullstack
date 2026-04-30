import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExperienceService } from '../../../core/services/experience.service';

@Component({
    selector: 'app-admin-experience',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-experience.component.html'
})
export class AdminExperienceComponent implements OnInit {

    experiences: any[] = [];
    form: any = {};
    editingId: number | null = null;

    constructor(private service: ExperienceService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getExperiences().subscribe((res: any) => {
            this.experiences = res;
        });
    }

    submit() {
        if (this.editingId) {
            this.service.updateExperience(this.editingId, this.form)
                .subscribe(() => this.load());
        } else {
            this.service.createExperience(this.form)
                .subscribe(() => this.load());
        }

        this.form = {};
        this.editingId = null;
    }

    edit(e: any) {
        this.form = { ...e };
        this.editingId = e.id;
    }

    delete(id: number) {
        this.service.deleteExperience(id)
            .subscribe(() => this.load());
    }
}