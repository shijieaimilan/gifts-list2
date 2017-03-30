import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Thing } from '../../thing.model';

@Component({
  selector: 'cancel-reserve-content',
  templateUrl: './cancel-reserve-content.component.html',
  styleUrls: ['./cancel-reserve-content.component.scss']
})
export class CancelReserveContentComponent implements OnInit {

  public data : Thing = <Thing>{};
  cancelationCode : string = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
