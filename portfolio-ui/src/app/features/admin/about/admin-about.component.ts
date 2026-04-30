import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../../core/services/about.service';

@Component({
    selector: 'app-admin-about',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-about.component.html'
})
export class AdminAboutComponent implements OnInit {

    form: any = { studies: [] };

    constructor(private service: AboutService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getAbout().subscribe((res: any) => {
            if (res) {
                this.form = res;
                if (!this.form.studies) {
                    this.form.studies = [];
                }
            }
        });
    }

    addStudy() {
        if (!this.form.studies) this.form.studies = [];
        this.form.studies.push('');
    }

    removeStudy(index: number) {
        this.form.studies.splice(index, 1);
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.service.uploadCv(file).subscribe({
                next: (res: any) => {
                    this.form.cvUrl = `http://localhost:5197${res.cvUrl}`;
                    alert('CV Uploaded successfully!');
                },
                error: (err) => alert('Failed to upload CV: ' + (err.error?.message || err.message || JSON.stringify(err)))
            });
        }
    }

    onImageSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.service.uploadImage(file).subscribe({
                next: (res: any) => {
                    this.form.imageUrl = `http://localhost:5197${res.imageUrl}`;
                    alert('Image Uploaded successfully!');
                },
                error: (err) => alert('Failed to upload Image: ' + (err.error?.message || err.message || JSON.stringify(err)))
            });
        }
    }

    submit() {
        this.service.saveAbout(this.form)
            .subscribe(() => {
                alert('Saved successfully!');
                this.load();
            });
    }
}
