import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Thing } from '../../thing.model';

@Component({
  selector: 'reserve-content',
  templateUrl: './reserve-content.component.html',
  styleUrls: ['./reserve-content.component.scss']
})
export class ReserveContentComponent implements OnInit {

  public data : Thing = <Thing>{};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}


