import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL: string= "https://music-catalog-production.up.railway.app/";

  constructor(private http: HttpClient) { }

  sendRequest(title:string, artist: string, message: string, senderEmail: string){

    return this.http.post(this.URL+'send-message', {title, artist, message, senderEmail} );


  }
}
