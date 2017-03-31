import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../';
import { HomeComponent, BankTransferComponent, CreditCardComponent, ThingsListComponent } from './';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'things-list', pathMatch: 'full' },
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
      },
      { path: '**', redirectTo: 'things-list', pathMatch: 'full' }
    ]    
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
