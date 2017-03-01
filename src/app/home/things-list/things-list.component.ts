import { Component, OnInit, Input } from '@angular/core';
import { GiftsService } from '../gifts.service';

@Component({
  selector: 'things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
 

  list : any[] = [];

  constructor(private gifts : GiftsService) { 
    
  }

  ngOnInit() {
    this.gifts.getAvailableGifts().subscribe(
      (result : any[]) => {
        this.list = result;
      },
      error => console.log(error)
    )
  }

}
