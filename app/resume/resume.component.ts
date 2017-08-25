import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ResumeService } from './resume.service';
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-resume',
    templateUrl: './app/resume/resume.component.html',
    styleUrls: ['./app/resume/resume.component.css']
})

export class ResumeComponent implements OnInit, AfterViewChecked {

    constructor(private resumeService: ResumeService){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        
    }
}