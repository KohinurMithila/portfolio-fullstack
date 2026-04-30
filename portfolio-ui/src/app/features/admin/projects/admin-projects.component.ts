import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../core/services/project.service';


@Component({
    selector: 'app-admin-projects',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-projects.component.html'
})
export class AdminProjectsComponent implements OnInit {

    projects: any[] = [];
    form: any = {};
    editingId: number | null = null;

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getProjects().subscribe((res: any) => {
            this.projects = res;
        });
    }

    submit() {
        // Ensure all string fields send at least an empty string to satisfy backend validation
        const payload = {
            title: this.form.title || '',
            description: this.form.description || '',
            techStack: this.form.techStack || '',
            imageUrl: this.form.imageUrl || '',
            liveLink: this.form.liveLink || '',
            githubLink: this.form.githubLink || ''
        };

        if (this.editingId) {
            this.service.updateProject(this.editingId, payload)
                .subscribe({
                    next: () => {
                        this.load();
                        this.form = {};
                        this.editingId = null;
                    },
                    error: (err) => alert("Failed to update project: " + (err.error?.title || err.message))
                });
        } else {
            this.service.createProject(payload)
                .subscribe({
                    next: () => {
                        this.load();
                        this.form = {};
                    },
                    error: (err) => alert("Failed to save project: " + (err.error?.title || err.message))
                });
        }
    }

    edit(p: any) {
        this.form = { ...p };
        this.editingId = p.id;
    }

    delete(id: number) {
        this.service.deleteProject(id)
            .subscribe(() => this.load());
    }
    upload(event: any) {
        const file = event.target.files[0];

        // future: send to backend / cloudinary
        console.log(file);
    }
}