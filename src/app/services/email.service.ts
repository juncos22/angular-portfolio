import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }
  sendEmail(contact: Contact): Observable<any> {
    return this._http.post('http://localhost:3000/sendmail', contact);
  }
}
