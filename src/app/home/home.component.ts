import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../services';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private spinner: SpinnerService) {}

  ngOnInit() {
    this.isLoading = true;
    
  }
  loadSpinner() {
    let self = this;
    setTimeout(function() {
      self.spinner.hide();
    }, 10000);  
    this.spinner.show();

  }

}
