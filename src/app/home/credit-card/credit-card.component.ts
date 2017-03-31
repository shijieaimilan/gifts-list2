import { Component, OnInit } from '@angular/core';

import { GiftsService } from '../gifts.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  data : any = {
    name: '',
    email: '',
    amount: 0
  }

  response : any = null;

  message : string = null;

  constructor(private gifts : GiftsService) { }

  ngOnInit() {
  }

  request() {
    this.gifts.requestMercapago(this.data.name, this.data.email, this.data.amount).subscribe(data => {
      this.response = data;
    });
  }

}
