import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

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

  public reserve(id : number) : Observable<State> {
    let data = {
      id : id
    };
    return this.http.post('/backend/api.php/reserve-thing', { data: JSON.stringify(data) })
      .map((res : Response) => {
        let body = res.json();
        return <State>(body || {});
      });
  }

}
