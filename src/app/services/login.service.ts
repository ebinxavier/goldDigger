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

  /**
   * validateEmail
   */
  public validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

}
