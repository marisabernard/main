import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Show} from './show.entity';

import { ShowService } from './show.service';

// globally loaded lodash
declare let _: any;

@Component({
    selector: 'app-show',
    templateUrl: './app/show/show.component.html',
    styleUrls: ['./app/show/show.component.css']
})

export class ShowComponent implements OnInit, AfterViewChecked {
    @Input('show') show: Show;
   
  // Fake Shows DB
  private db: Show[] = [
    new Show(
      '1', 'Show Title 1'),
    new Show(
      '2', 'Show Title 2'),
    new Show(
      '3', 'Show Title 3'),
    new Show(
      '4', 'Show Title 4'),
    new Show(
      '5', 'Show Title 5')
  ];

    constructor(private showService: ShowService, private backend: MockBackend){
        this.backend.connections.subscribe( c => {
            
                  let singleShowMatcher = /\/api\/show\/([0-9]+)/i;        
                  
                  // return all shows
                  // GET: /show
                  if (c.request.url === "http://localhost:8091/api/show" && c.request.method === 0) {
                    let res = new Response(new ResponseOptions({
                      body: JSON.stringify(this.db)
                    }));
                    
                    c.mockRespond(res);
                  }
                  // return show matching the given id
                  // GET: /show/:id
                  else if (c.request.url.match(singleShowMatcher) && c.request.method === 0) {
                    let matches = this.db.filter( (t) => {
                      return t._id == c.request.url.match(singleShowMatcher)[1]
                    });
                    
                    c.mockRespond(new Response(new ResponseOptions({
                      body: JSON.stringify(matches[0])
                    }))); 
                  }
                  // Add or update a show
                  // POST: /show
                  else if (c.request.url === 'http://localhost:8091/api/show' && c.request.method === 1) {
                    let newShow: Show = JSON.parse(c.request._body);
                    
                    let existingShow = this.db.filter( (show: Show) => { return show._id == newShow._id});
                    if (existingShow && existingShow.length === 1) {
                      Object.assign(existingShow[0], newShow);
                      
                      c.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(existingShow[0])
                      })));
                    } else {
                      newShow._id = parseInt(_.max(this.db, function(t) {
                        return t._id;
                      })._id || 0, 10) + 1 + '';
                
                      this.db.push(newShow);
                      
                      c.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(newShow)
                      })));
                    }
                  }
                  // Delete a show
                  // DELETE: /show/:id
                  else if (c.request.url.match(singleShowMatcher) && c.request.method === 3) {
                    let showId = c.request.url.match(singleShowMatcher)[1];
                    let pos = _.indexOf(_.pluck(this.db, '_id'), showId);
                    
                    this.db.splice(pos, 1);
                    
                    c.mockRespond(new Response(new ResponseOptions({
                      body: JSON.stringify({})
                    })));
                  }
                  
                });
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.showService.loadAllShows();
        
    }

    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        
    }

}