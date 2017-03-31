import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
