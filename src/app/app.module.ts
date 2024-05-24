import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './header/content/content.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { BasicInfoComponent } from './about/basic-info/basic-info.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioImagesComponent } from './portfolio/portfolio-images/portfolio-images.component';
import { FrontEndImagesComponent } from './portfolio/front-end-images/front-end-images.component';
import { BackEndImagesComponent } from './portfolio/back-end-images/back-end-images.component';
import { DatabaseImagesComponent } from './portfolio/database-images/database-images.component';
import { ResumeFancyComponent } from './resume/resume-fancy/resume-fancy.component';
import { ResumePrintComponent } from './resume/resume-print/resume-print.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    FooterComponent,
    ContentComponent,
    NavigationComponent,
    BasicInfoComponent,
    AboutContentComponent,
    ContactFormComponent,
    ContactInfoComponent,
    ResumeComponent,
    PortfolioImagesComponent,
    FrontEndImagesComponent,
    BackEndImagesComponent,
    DatabaseImagesComponent,
    ResumeFancyComponent,
    ResumePrintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
