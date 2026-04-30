import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AboutService {

    constructor(private api: ApiService) { }

    getAbout() {
        return this.api.get('/aboutme');
    }

    saveAbout(data: any) {
        return this.api.post('/aboutme', data);
    }

    uploadCv(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        return this.api.post('/aboutme/upload-cv', formData);
    }

    uploadImage(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        return this.api.post('/aboutme/upload-image', formData);
    }
}
