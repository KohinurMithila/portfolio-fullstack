import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({ providedIn: 'root' })
export class ExperienceService {

    constructor(private api: ApiService) { }

    getExperiences() {
        return this.api.get('/experience');
    }

    createExperience(data: any) {
        return this.api.post('/experience', data);
    }

    updateExperience(id: number, data: any) {
        return this.api.put(`/experience/${id}`, data);
    }

    deleteExperience(id: number) {
        return this.api.delete(`/experience/${id}`);
    }
}