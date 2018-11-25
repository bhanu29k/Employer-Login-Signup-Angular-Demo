import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { SubscriptionFeeComponent } from './subscription-fee/subscription-fee.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:SignupComponent},
  {path:'signup',component:LoginComponent},
  {path:'fee',component:SubscriptionFeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
