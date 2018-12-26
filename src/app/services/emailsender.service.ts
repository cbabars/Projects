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

  sendEmail(name, email, message, mobileno) {
    return this.http.post('assets/server/index.php',{ name: name, email: email, message: message, mobileno: mobileno})
      .map(response => response.json());
  }

}
