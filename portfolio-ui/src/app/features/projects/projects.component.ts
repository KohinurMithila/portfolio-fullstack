import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

    projects: any[] = [];

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getProjects().subscribe((res: any) => {
            this.projects = res;
        });
    }
}