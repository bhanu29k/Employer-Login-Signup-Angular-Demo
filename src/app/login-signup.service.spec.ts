import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { LoginSignupService } from './login-signup.service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LoginSignup } from './login-signup';
import { SubscriptionFeeDetails } from './subscription-fee-details';

describe('LoginSignupService', () => {
  let service:LoginSignupService;
  let httpMock:HttpTestingController; 
  beforeEach(() => {TestBed.configureTestingModule({
    providers:[LoginSignupService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(LoginSignupService);
  httpMock=TestBed.get(HttpTestingController);
});
afterEach(()=>{
  httpMock.verify();
});
it('should retreive LoginDetails from the API via GET',()=>{
const dummyPosts: LoginSignup[]=[{
  firstName:"Bhanu",
  lastName:"Khandelwal",
  gender:"male",
  country:"India",
  emailId:"bhanu@9k@gmail.com",
  password:"Bhanu@123",
  empId:"bhanu29k"
}]; 
service.requestLogin('bhanu29k','Bhanu@123').subscribe(posts =>{
expect(posts.length).toBe(1);
expect(posts).toEqual(dummyPosts);

});
const request=httpMock.expectOne(`${service.userUrl}/employer/login/emp/bhanu29k/Bhanu@123`);
expect(request.request.method).toBe('GET');
request.flush(dummyPosts);
});

it('should retreive SignupDetails from the API via POST',()=>{
  const dummyPosts: LoginSignup[]=[{
    firstName:"Bhanu",
    lastName:"Khandelwal",
    gender:"male",
    country:"India",
    emailId:"bhanu@9k@gmail.com",
    password:"Bhanu@123",
    empId:"bhanu29k"
  }]; 
  service.addUser(dummyPosts).subscribe(posts =>{
  expect(posts.length).toBe(1);
  expect(posts).toEqual(dummyPosts);
  });
  const request=httpMock.expectOne(`${service.userUrl}/employer/signup/emp`);
  expect(request.request.method).toBe('POST');
  request.flush(dummyPosts);
  });
  
  it('should retreive addFeeDetails from the API via POST',()=>{
    const dummyPosts: SubscriptionFeeDetails[]=[{
      bankName:"Sbi",
      cardName:"Credit",
      fee:"300",
      cardNo:"12345678"
         }]; 
    service.addFeeDetails(dummyPosts).subscribe(posts =>{
    expect(posts.length).toBe(1);
    expect(posts).toEqual(dummyPosts);
    });
    const request=httpMock.expectOne(`${service.userUrl}/employer/payfee`);
    expect(request.request.method).toBe('POST');
    request.flush(dummyPosts);
    });
});
