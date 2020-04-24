import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeService } from './resume/resume.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  },{
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
