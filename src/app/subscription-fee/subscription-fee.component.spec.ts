import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFeeComponent } from './subscription-fee.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionFeeDetails } from '../subscription-fee-details';
import { LoginSignupService } from '../login-signup.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AppComponent } from '../app.component';

describe('SubscriptionFeeComponent', () => {
  let component: SubscriptionFeeComponent;
  let fixture: ComponentFixture<SubscriptionFeeComponent>;
  let service:LoginSignupService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionFeeComponent,LoginComponent,SignupComponent,AppComponent ],
      imports:[ BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
        providers: [SubscriptionFeeDetails,{provide:LoginSignupService},LoginComponent,SignupComponent,SubscriptionFeeComponent]
    })
    .compileComponents();
    component=TestBed.get(SubscriptionFeeComponent);
    service=TestBed.get(LoginSignupService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.subscriptionFeeForm.valid).toBeFalsy();
  });

  it(' Bank Name field validity', () => {
    let errors = {};
    let bankName = component.subscriptionFeeForm.controls['bankName']; 
    expect(bankName.valid).toBeFalsy(); 
    
    errors = bankName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    bankName.setValue("icici");
    errors = bankName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    bankName.setValue("Icici");
    errors = bankName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  it(' Card Name field validity', () => {
    let errors = {};
    let cardName = component.subscriptionFeeForm.controls['cardName']; 
    expect(cardName.valid).toBeFalsy(); 
    
    errors = cardName.errors || {};
    expect(errors['required']).toBeTruthy(); 

    cardName.setValue("debit");
    errors = cardName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    cardName.setValue("Debit");
    errors = cardName.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  
  it(' Fee field validity', () => {
    let errors = {};
    let fee = component.subscriptionFeeForm.controls['fee']; 
    expect(fee.valid).toBeTruthy(); 
    
   errors = fee.errors || {};
   expect(errors['required']).toBeUndefined(); 

    });

    
  it(' Card No field validity', () => {
    let errors = {};
    let cardNo = component.subscriptionFeeForm.controls['cardNo']; 
    expect(cardNo.valid).toBeFalsy(); 
    
    errors = cardNo.errors || {};
    expect(errors['required']).toBeTruthy(); 

    cardNo.setValue("098765");
    errors = cardNo.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeTruthy();   

    cardNo.setValue("12345678");
    errors = cardNo.errors || {};
    expect(errors['required']).toBeFalsy(); 
    expect(errors['pattern']).toBeFalsy();  
  });

  it(' terms field validity', () => {
    let errors = {};
    let terms = component.subscriptionFeeForm.controls['terms']; 
    expect(terms.valid).toBeFalsy(); 
    
    errors = terms.errors || {};
    expect(errors['required']).toBeTruthy(); 

    });

    it('onsubmit function testing',()=>{
      let obj=component.subscriptionFeeForm;
      obj.controls['bankName'].setValue("Icici");
      obj.controls['cardName'].setValue("Sbi");
      obj.controls['fee'].setValue("400");
      obj.controls['cardNo'].setValue("12345678");
      component.onSubmit(obj);
      
    });
    
    
  

});
