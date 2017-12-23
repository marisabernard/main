import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  // instantiate posts to an empty object
  /*posts: any = [];*/

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    // Retrieve posts from the API
    /*this.resumeService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });*/
  }
}
