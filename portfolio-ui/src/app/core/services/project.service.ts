import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    constructor(private api: ApiService) { }

    getProjects() {
        return this.api.get('/projects');
    }

    createProject(data: any) {
        return this.api.post('/projects', data);
    }

    updateProject(id: number, data: any) {
        return this.api.put(`/projects/${id}`, data);
    }

    deleteProject(id: number) {
        return this.api.delete(`/projects/${id}`);
    }
}