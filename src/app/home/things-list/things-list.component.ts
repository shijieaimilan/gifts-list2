import { Component, OnInit, Input } from '@angular/core';
import { GiftsService } from '../gifts.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Thing } from '../thing.model';
import {ThingCrudContentComponent, ReserveContentComponent } from './';

@Component({
  selector: 'things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
 
  closeResult: string;

  selectedItem : Thing = null;

  list : Thing[] = [];

  constructor(private modalService: NgbModal, private gifts : GiftsService) { 
    
  }

  ngOnInit() {
    this.gifts.getAllGifts().subscribe(
      (result : any[]) => {
        this.list = result;
      },
      error => console.log(error)
    )
  }

  openCrud(item: any) {
    const modalRef = this.modalService.open(ThingCrudContentComponent);
    modalRef.result.then(
      (result) => {
        result.reserver = null;
        if(result.id == 0)
          this.add(result)
        else
          this.update(result);
      }
    );

    if(item)
      modalRef.componentInstance.data = JSON.parse(JSON.stringify(item)); //clonar
    else  
      modalRef.componentInstance.data = { id: 0 };
  }


  openReserveModal(item: any) {
    const modalRef = this.modalService.open(ReserveContentComponent);
    modalRef.result.then(
      (result) => {
        this.reserve(result);
      }
    );

    if(item)
      modalRef.componentInstance.data = JSON.parse(JSON.stringify(item)); //clonar
    else  
      modalRef.componentInstance.data = { id: 0 };
  }


  reserve(item : any) {
    this.gifts.reserve(item).subscribe(result => {
      this.gifts.getAllGifts().subscribe(data => {          
        this.list = data;
        alert(result.message);
      });

    });
  }

  removeReserved(item : any) {
    if(confirm("¿Desea cancelar la reserva?")) {


      this.gifts.removeReserved(item.id).subscribe(result => {
        this.gifts.getAllGifts().subscribe(data => {          
          this.list = data;
        });

      });
    }
  }

  add(item : any) {
    this.gifts.add(item).subscribe(result => {
      this.gifts.getAllGifts().subscribe(data => {          
        this.list = data;
      });
    });
  }

  delete(item : any) {
    if(confirm("¿Desea eliminar el objeto?")) {


      this.gifts.delete(item.id).subscribe(result => {
        this.gifts.getAllGifts().subscribe(data => {          
          this.list = data;
        });

      });
    }
  }

  update(item : any) {
    this.gifts.update(item).subscribe(result => {
      this.gifts.getAllGifts().subscribe(data => {          
        this.list = data;
      });

    });
  }



}
