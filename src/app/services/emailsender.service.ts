import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmailsenderService {


  constructor(private http: Http) {

  }

  sendEmail(name, email, message) {
    return this.http.post('assets/server/index.php',{ name, email, message})
      .map(response => response.json());
  }

}
