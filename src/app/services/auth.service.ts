import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  private _isLoggedIn : boolean = false;

  constructor(private http: Http) { }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  login(user : string, pass : string) : Observable<boolean> {

    let data = {
      user, pass
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return Observable.create((observer : Observer<boolean>) => {
      this.http.post('/backend/api.php/login', ('data=' + JSON.stringify(data)), { headers }).subscription(
        result => {
          console.log("log", result);
          //observer.next(result);
        }
      );
    });
    
  }

}
