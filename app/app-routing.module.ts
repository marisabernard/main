import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  } from '@angular/material';
  import {FlexLayoutModule} from "@angular/flex-layout";
//import 'hammerjs';

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
    imports: [CommonModule, BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES, {useHash:false}), BrowserAnimationsModule, MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule, FlexLayoutModule],
    exports: [RouterModule],
    providers: [ResumeService, ShowService]
})

export class AppRoutingModule {}