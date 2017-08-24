import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResumeComponent } from './resume/resume.component';
import { ResumeService } from './resume/resume.service';

import { ShowComponent } from './show/show.component';
import { ShowService } from './show/show.service';

const ROUTES = [
    {
        path:'',
        redirectTo: '/resume',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'show',
        component: ShowComponent
    }
]

@NgModule({
    declarations: [ResumeComponent, ShowComponent],
    imports: [CommonModule, BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES, {useHash:false})],
    exports: [RouterModule],
    providers: [ResumeService, ShowService]
})

export class AppRoutingModule {}