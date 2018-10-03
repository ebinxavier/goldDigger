import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public titleName = 'scrape';
  constructor(private login: LoginService, private router: Router) { }
  ngOnInit() {
    
  }
  closeMenu(title) {
    if((window.innerWidth || document.body.clientWidth)<768) //only for small devices animation needed.
    document.getElementById('navbar-toggler').click();
    this.titleName= title;
  }
  logOut() {
    this.login.logOut();
    this.router.navigate(['login'])
  }



}
