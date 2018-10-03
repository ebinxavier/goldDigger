import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private user = { name: "ebin", pass: "qburst" };
  /**
   * authenticateUser
   */
  public authenticateUser(username, password) {
    if (username == this.user.name && password == this.user.pass) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }
  /**
   * logOut
   */
  public logOut() {
    localStorage.removeItem('loggedIn');
  }
}
