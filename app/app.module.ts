import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
 
@NgModule({
  providers: [
     BaseRequestOptions,
     MockBackend,
     {
       provide: Http,
       deps: [MockBackend, BaseRequestOptions],
       useFactory: (backend, options) => { return new Http(backend, options); }
     }
  ],
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [ AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }