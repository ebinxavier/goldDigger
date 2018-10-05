import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ScrapeCompaniesService {

  constructor(private http: HttpClient) { }

  getStateListing(): Observable<any> {
    return this.http.get("assets/states.json");
  }
}
