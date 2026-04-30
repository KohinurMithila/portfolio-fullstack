import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SkillService {

    constructor(private api: ApiService) { }

    getSkills() {
        return this.api.get('/skills');
    }

    createSkill(data: any) {
        return this.api.post('/skills', data);
    }

    updateSkill(id: number, data: any) {
        return this.api.put(`/skills/${id}`, data);
    }

    deleteSkill(id: number) {
        return this.api.delete(`/skills/${id}`);
    }
}