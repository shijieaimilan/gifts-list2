import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { ThingsListComponent } from './things-list/things-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ThingsListComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
