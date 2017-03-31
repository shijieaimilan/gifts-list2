import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import  { Thing } from './thing.model';
import  { State } from './state.model';

@Injectable()
export class GiftsService {


  constructor(private http : Http) { }

  public getAllGifts() : Observable<Thing[]> {

    return this.http.get('/backend/api.php/get-all-things')      
      .map(this.extractData);

    // return Observable.create((observer : Observer<Thing[]>) => {
      
    // }); 
    // return Observable.of(
    //   <Thing[]>[
    //     { title: 'Dor', id: 1, description: 'para la pared', url: '', reserver: 'Eze'},
    //     { title: 'Savanas', id: 2, description: 'para la pared', url: '', reserved: undefined}
    //   ]
    // );
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

    return this.http.post('/backend/api.php/reserve-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public add(obj : Thing) : Observable<State> {
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post('/backend/api.php/add-thing', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

  public update(obj : Thing) : Observable<State> {
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post('/backend/api.php/update-thing', ('data=' + JSON.stringify(obj)), { headers })
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

    return this.http.post('/backend/api.php/delete-thing', ('data=' + JSON.stringify(obj)), { headers })
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

    return this.http.post('/backend/api.php/remove-reserved-thing', ('data=' + JSON.stringify(obj)), { headers })
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

    return this.http.post('/backend/api.php/request-mercapago', ('data=' + JSON.stringify(obj)), { headers })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

}
