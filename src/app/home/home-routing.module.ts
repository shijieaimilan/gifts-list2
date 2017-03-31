import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../';
import { HomeComponent, BankTransferComponent, CreditCardComponent, ThingsListComponent } from './';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
    children: [
      {
        path: 'things-list',
        component: ThingsListComponent
      },
      {
        path: 'bank-transfer',
        component: BankTransferComponent
      },
      {
        path: 'credit-card',
        component: CreditCardComponent
      }
    ]    
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
