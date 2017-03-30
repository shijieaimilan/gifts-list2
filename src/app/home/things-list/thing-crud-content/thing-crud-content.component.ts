import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Thing } from '../../thing.model';

@Component({
  selector: 'thing-crud-content',
  templateUrl: './thing-crud-content.component.html',
  styleUrls: ['./thing-crud-content.component.scss']
})
export class ThingCrudContentComponent implements OnInit {

  public data : Thing = <Thing>{};
  

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }

}
