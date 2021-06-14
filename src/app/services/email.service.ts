import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // NO DISPONIBLE POR AHORA!!!
  constructor(private _http: HttpClient) { }
  sendEmail(contact: Contact): Observable<any> {
    return this._http.post('', contact);
  }
}
