import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as _ from 'lodash';

import { environment } from '../../environments/environment';
import  { Thing } from './thing.model';
import  { State } from './state.model';

@Injectable()
export class GiftsService {


  constructor(private http : Http) { }

  public getAllGifts() : Observable<Thing[]> {
    
    return this.http.get(environment.apiUrl + 'api.php/get-all-things')      
      .map(this.extractData);
  }

  private extractData(res: Response) : Thing[] {
    let body = res.json();
    return body || { };
  }

  public reserve(obj : Thing) : Observable<State> {
    // let data = {
    //   id : id,
    //   reserver: reserver
    // };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/reserve-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public requestSendMoney(obj : Thing) : Observable<State> { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    return this.http.post(environment.apiUrl + 'api.php/request-send-money', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }


  public add(obj : Thing) : Observable<State> {
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/add-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public update(obj : Thing) : Observable<State> {
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/update-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public delete(id : number) : Observable<State> {
    let obj = {
      id : id
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/delete-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public removeReserved(id : number, cancelationCode : string) : Observable<State> {
    let obj = {
      id : id,
      cancelationCode: cancelationCode
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/remove-reserved-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }


   public requestMercapago(name : string, email: string, amount : Number) : Observable<State> {
    let obj = {
      name,
      email,
      amount
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post(environment.apiUrl + 'api.php/request-mercapago', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

}
