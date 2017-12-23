import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // instantiate posts to an empty object
  /*posts: any = [];*/

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    // Retrieve posts from the API
    /*this.homeService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });*/
  }
}
