import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import  { Thing } from './thing.model';

@Injectable()
export class GiftsService {

  constructor() { }

  public getAvailableGifts() : Observable<Thing[]> {
    return Observable.of(
      <Thing[]>[
        { title: 'Dor', id: 1, description: 'para la pared', url: '', reserver: 'Eze'},
        { title: 'Savanas', id: 2, description: 'para la pared', url: '', reserved: undefined}
      ]
    );
  }

  public getReservedGifts() : Thing[] {
    return [];
  }

  public reserveGift(ids: number[]) : void{

  }

}
