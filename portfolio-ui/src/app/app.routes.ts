import { Routes } from '@angular/router';
import { LoginComponent } from './features/admin/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminLayoutComponent } from './features/admin/layout/admin-layout.component';
import { AdminProjectsComponent } from './features/admin/projects/admin-projects.component';
import { AdminSkillsComponent } from './features/admin/skills/admin-skills.component';
import { AdminExperienceComponent } from './features/admin/experience/admin-experience.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { AdminAboutComponent } from './features/admin/about/admin-about.component';

import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin/login', component: LoginComponent },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'about', component: AdminAboutComponent },
            { path: 'projects', component: AdminProjectsComponent },
            { path: 'skills', component: AdminSkillsComponent },
            { path: 'experience', component: AdminExperienceComponent }
        ]
    }
];
