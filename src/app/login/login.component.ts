import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData : any = {
    user : '',
    pass: ''
  };

  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  login() {
    this.auth.login(this.loginData.user, this.loginData.pass).subscribe(
      result => {
        if(result) {
          this.router.navigate(['home','things-list']);
        }

      },
      error => {
        console.log(error);
      }
    );
  }

}
