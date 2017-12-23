import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // instantiate posts to an empty object
  /*posts: any = [];*/

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Retrieve posts from the API
    /*this.homeService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });*/
  }
}
