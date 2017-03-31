import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  private _isLoggedIn : Boolean = false;

  constructor(private http: Http) { }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  logout() : Observable<Boolean> {
    return Observable.create((observer : Observer<Boolean>) => { 
      this._isLoggedIn = false;
      observer.next(true);
      observer.complete();
    });

  }

  login(user : string, pass : string) : Observable<Boolean> {

    let data = {
      user, pass
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return Observable.create((observer : Observer<Boolean>) => {
      this.http.post('/backend/api.php/login', ('data=' + JSON.stringify(data)), { headers })
      .map(response => {
        let rv = response.json();
        return <Boolean>rv;
      }).subscribe(
        response => {
          this._isLoggedIn = response;
          observer.next(response);
          observer.complete();
        },
        error => {
          this._isLoggedIn = false;
          observer.error(error);
          observer.complete();
        }
      )
    });
    
  }

}
