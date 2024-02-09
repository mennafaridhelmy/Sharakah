import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TermsAndPolicyComponent } from './pages/terms-and-policy/terms-and-policy.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }, //default route
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'my-projects/:id', component: MyProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CreateAccountComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'terms-and-policy', component: TermsAndPolicyComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
