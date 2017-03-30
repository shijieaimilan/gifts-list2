import { Component, OnInit } from '@angular/core';
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

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginData.user, this.loginData.pass).subscribe(
      result => {

      },
      error => {
        console.log(error);
      }
    );
  }

}
