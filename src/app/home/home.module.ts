import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { GiftsService } from './gifts.service';
import { ThingsListComponent } from './things-list/things-list.component';
import { ThingCrudContentComponent } from './things-list/thing-crud-content/thing-crud-content.component';
import { ReserveContentComponent } from './things-list/reserve-content/reserve-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TranslateModule,
    NgbModalModule.forRoot(),
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ThingsListComponent,
    ThingCrudContentComponent,
    ReserveContentComponent
  ],
  entryComponents: [
    ThingCrudContentComponent,
    ReserveContentComponent
  ],
  providers: [
    QuoteService,
    GiftsService
  ]
})
export class HomeModule { }
