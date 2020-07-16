import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Email } from './email.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  protected baseUri: string = "http://dee5f407511f.ngrok.io/api/emails/enviar";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  postEmail(email) : Observable<any> {
    return this.http.post(this.baseUri, JSON.stringify(email), this.httpOptions);
  }
}
