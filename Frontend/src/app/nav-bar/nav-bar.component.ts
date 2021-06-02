import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser:string;

  constructor( private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.loggedInUser= localStorage.getItem('displayName');
    return this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('displayName');
    this.alertifyService.success("You are looged out!")

  }
}
