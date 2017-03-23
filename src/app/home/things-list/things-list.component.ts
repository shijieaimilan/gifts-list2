import { Component, OnInit, Input } from '@angular/core';
import { GiftsService } from '../gifts.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
 
  closeResult: string;

  selectedItem : any = null;

  list : any[] = [];

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

  open(content : any, item: any) {
    this.selectedItem = item;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  reserve(item : any) {
    if(confirm("¿Desea reservar?")) {
      this.gifts.reserve(item.id).subscribe(result => {
        alert("Reservado");
      });
    }
  }


}
