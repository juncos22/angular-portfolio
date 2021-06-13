import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProgressBarModule } from "angular-progress-bar";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from 'src/environments/environment';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SwiperModule } from "swiper/angular";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EducationService } from './services/education.service';
import { ExpertiseService } from './services/expertise.service';
import { PortfolioService } from './services/portfolio.service';
import { ProfileService } from './services/profile.service';
import { SkillService } from './services/skill.service';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    SwiperModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EducationService, ExpertiseService,
    PortfolioService, ProfileService,
    SkillService, EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
