import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

// Inject into our component
@Injectable()  
export class InfoService {

    constructor(private http: Http) {

    }
    createAPI(recall) {
        return this.http.get('api/' + recall);    
    }
}