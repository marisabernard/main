import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // instantiate posts to an empty object
  /*posts: any = [];*/

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // Retrieve posts from the API
    /*this.homeService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });*/
  }
}
