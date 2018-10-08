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
  public email;
  public emailErr = "";
  public password;
  public passwordErr = "";

  constructor(private login: LoginService, private router: Router) { }

  public checkErrors() {
    if (this.email) {

      if (!this.login.validateEmail(this.email)) {
        this.emailErr = "Please provide a valid email address";
      }
      else {
        this.emailErr = "";
      }
    }
    else {
      this.emailErr = "This field is required";
    }

    if (!this.password) {
      this.passwordErr = "This field is required";
    }
    else {
      this.passwordErr = "";
    }

    return this.emailErr.length || this.passwordErr.length;

  }

  public authenticate(): Boolean {
    if (!this.checkErrors()) {
      if (this.login.authenticateUser(this.email, this.password)) {
        this.router.navigate(['dashboard']);
        return true;
      }
      this.loginFailed = true;
      return false;
    }
  }

  ngOnInit() {
    this.router.navigate(['dashboard']);
  }

}
