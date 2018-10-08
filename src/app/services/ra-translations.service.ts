import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RaTranslationsService {

  constructor(private http: HttpClient) { }
  getPage(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token 70a17f50-1438-46c3-a5e2-04944d62e7eb',
        'Content-Type':  'application/json',
      })
    };

    const headers = new HttpHeaders().set("Authorization", "Token 70a17f50-1438-46c3-a5e2-04944d62e7eb");


    return this.http.get("https://golddigger-dev.legalinc.com/translation/v1/registered-agents/", {headers});
  }
}
