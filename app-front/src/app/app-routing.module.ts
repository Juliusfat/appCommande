import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreatePurchaseComponent } from './components/create-purchase/create-purchase.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'dashboard', component : DashbordComponent},
  { path : 'form', component : CreatePurchaseComponent},
  { path : '', redirectTo: 'dashbord', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
