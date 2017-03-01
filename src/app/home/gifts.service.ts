import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GiftsService {

  constructor() { }

  public getAvailableGifts() : Observable<any[]> {
    return Observable.of(
      [
        { title: 'Dor', id: 1},
        { title: 'Savanas', id: 2}
      ]
    );
  }

  public getReservedGifts() : any[] {
    return [];
  }

  public reserveGift(ids: number[]) : void{

  }

}
