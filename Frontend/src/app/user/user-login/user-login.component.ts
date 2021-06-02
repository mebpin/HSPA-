import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authSerivice:AuthService,
             private alertifyService:AlertifyService,
             private router : Router
             ) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm){
   console.log(loginForm);
   const token = this.authSerivice.authUser(loginForm.value);
   if(token){
     localStorage.setItem('token',token.userName);
     localStorage.setItem('displayName',token.fullName);
     this.alertifyService.success("Congrats  You are Logged in");
     this.router.navigate(['/'])
   }else{
    this.alertifyService.error("User Name or Password is incorrect");
   }


  }

}
