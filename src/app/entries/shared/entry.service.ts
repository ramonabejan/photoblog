import {Injectable} from '@angular/core'
import { Entry } from "./entry.model";
import { Http } from '@angular/http';

@Injectable()
export class EntryService {
    // injected service are only avaible in the constructor function; to expose the ht service to the entire service we have to add the private/public keyword  
    constructor(private http: Http) {

    }

    //fetch data from the server
    //return a Promise of Entry[]
    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[] );
    }

}