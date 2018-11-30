import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';
import { SubscriptionFeeComponent } from './subscription-fee/subscription-fee.component';
import { SubscriptionFeeDetails } from './subscription-fee-details';
import { LoginSignupService } from './login-signup.service';
import { Observable} from 'rxjs-compat/Observable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SubscriptionFeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    HttpModule,
    Observable
  ],
  providers: [SubscriptionFeeDetails,LoginSignupService,LoginComponent,SignupComponent,SubscriptionFeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
