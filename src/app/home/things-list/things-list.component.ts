import { Component, OnInit, Input } from '@angular/core';
import { GiftsService } from '../gifts.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services';

import { Thing } from '../thing.model';
import {ThingCrudContentComponent, ReserveContentComponent, CancelReserveContentComponent } from './';

@Component({
  selector: 'things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
 
  closeResult: string;

  selectedItem : Thing = null;

  list : Thing[] = [];

  

  constructor(private modalService: NgbModal, private gifts : GiftsService, private auth : AuthService) { 
    
  }

  ngOnInit() {
    this.gifts.getAllGifts().subscribe(
      (result : any[]) => {
        this.list = result.sort(this.sort);;
      },
      error => console.log(error)
    )
  }

  isLogedIn() : Boolean {
    return this.auth.isLoggedIn();
  }

  // login() {
  //   this.isLogedIn = !this.isLogedIn;
  // }

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

  sort(a : Thing, b : Thing) {
    let a1 = !!a.reserver ? 1 : 0;
    let b1 = !!b.reserver ? 1 : 0;
    return a1-b1;
  }

  openView(item: any, viewing : boolean) {
    const modalRef = this.modalService.open(ReserveContentComponent);
    modalRef.result.then(
      (result) => {
        this.gifts.reserve(result).subscribe(result => {
          this.gifts.getAllGifts().subscribe(data => {          
            this.list = data.sort(this.sort);
            alert(result.message);
          });
        });
      }
    );
    modalRef.componentInstance.isViewing = viewing;
    if(item)
      modalRef.componentInstance.data = JSON.parse(JSON.stringify(item)); //clonar
    else  
      modalRef.componentInstance.data = { id: 0 };
  }


  removeReserved(item : any) {
    const modalRef = this.modalService.open(CancelReserveContentComponent);
    modalRef.result.then(
      (code) => {
        this.gifts.removeReserved(item.id, code).subscribe(result => {
          if(result.result) {
            this.gifts.getAllGifts().subscribe(data => {          
              this.list = data.sort(this.sort);;
            });
          }
          else {
            alert(result.message);
          }
        });
      }
    );

    if(item)
      modalRef.componentInstance.data = JSON.parse(JSON.stringify(item)); //clonar
    else  
      modalRef.componentInstance.data = { id: 0 };
  }

  add(item : any) {
    if(!item.url)
      item.url = null;
    if(!item.description)
      item.description = null;
    this.gifts.add(item).subscribe(result => {
      this.gifts.getAllGifts().subscribe(data => {          
        this.list = data.sort(this.sort);;
      });
    });
  }

  delete(item : any) {
    if(confirm("¿Desea eliminar el objeto?")) {


      this.gifts.delete(item.id).subscribe(result => {
        this.gifts.getAllGifts().subscribe(data => {          
          this.list = data.sort(this.sort);;
        });

      });
    }
  }

  update(item : any) {
    this.gifts.update(item).subscribe(result => {
      this.gifts.getAllGifts().subscribe(data => {          
        this.list = data.sort(this.sort);;
      });

    });
  }



}
