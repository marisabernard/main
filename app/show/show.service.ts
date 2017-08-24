import {Show} from './show.entity';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowService {
	shows: Show[] = [];
	
	constructor(private http: Http) {

	}
	
	addNewShow() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
    
    var newShow = new Show("0", 'New Show', 'Nobody', 'Enter show description here', 0);
		
		this.http
			.post('http://localhost:8091/api/show', JSON.stringify(newShow), headers)
			.map(res => res.json())
			.subscribe(
				data => this.shows.push(data),
				err => this.logError(err),
				() => console.log('Updated Show')
			);	
	}
	
	saveShow(show: Show) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		this.http
			.post('http://localhost:8091/api/show', JSON.stringify(show), headers)
			.map(res => res.json())
			.subscribe(
				null,
				err => this.logError(err),
				() => console.log('Updated Show')
			);	
	}
	
	deleteShow(show: Show) {
		this.http
			.delete('http://localhost:8091/api/show/' + show._id)
			.map(res => res.text())
			.subscribe(
				data => { 
					var midx = -1;
					
					this.shows.forEach( (t, idx) => { 
						if (t._id == show._id) { 
							midx = idx;  
						}
					});
					
					this.shows.splice(midx, 1); 
				},
				err => this.logError(err),
				() => console.log('Request for all shows completed successfully')
			);	
	}
	
	loadAllShows() {
		this.http
			.get('http://localhost:8091/api/show')
			.map(res => {
        return res.json()
      })
			.subscribe(
				data => {
          this.shows = data;
        },
				err => this.logError(err),
				() => console.log("Loaded all shows")
			);
	}

  loadShowById(id) {
    this.http
      .get('http://localhost:8091/api/show/' + id)
      .map(res => res.json())
      .subscribe(
        data => this.shows = [data],
        err => this.logError(err),
        () => console.log("Loaded show with id " + id)
      );
  }
	
	logError(err) {
		console.error('There was an error: ' + err);
	}

	loadShows(){
		return this.http.get('http://localhost:8091/api/show')
		.map(res => res.json());
	}
}
