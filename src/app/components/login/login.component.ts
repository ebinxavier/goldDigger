import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFailed = false;
  public username;
  public password;

  constructor(private login: LoginService, private router: Router) { }

  public authenticate(): Boolean {
    if (this.login.authenticateUser(this.username, this.password)) {
      this.router.navigate(['dashboard']);
      return true;
    }
    this.loginFailed = true;
    return false;
  }

  ngOnInit() {
    this.router.navigate(['dashboard']);
  }

}
