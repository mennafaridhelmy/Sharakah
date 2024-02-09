import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TermsAndPolicyComponent } from './pages/terms-and-policy/terms-and-policy.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProjectsComponent,
    CreateProjectComponent,
    MyProjectsComponent,
    ProfileComponent,
    ErrorPageComponent,
    TermsAndPolicyComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
