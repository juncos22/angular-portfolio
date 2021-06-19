import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageResponse } from "./../models/message-response";
import { Message } from "./../models/message";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // URL -> POST: https://emailsenderws.azurewebsites.net/api/Email/Send
  constructor(private _http: HttpClient) { }
  sendEmail(message: Message): Observable<MessageResponse> {
    return this._http.post<MessageResponse>(`${environment.apiUrlBase}/Send`, message);
  }
}
