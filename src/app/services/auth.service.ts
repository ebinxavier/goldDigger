import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isLoggedIn() {
    if (localStorage.getItem('loggedIn') == "true")
      return true;
    return false;
  }
}
