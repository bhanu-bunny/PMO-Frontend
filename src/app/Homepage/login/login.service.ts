import{ Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";



import{login } from "../login/login.model";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({ providedIn: "root" })

export class LoginService{
selecteduser:login
private token:string;
private authStatusListener = new Subject<boolean>();
constructor (private http: HttpClient,private router:Router){}

createuser(email:string,password:string){
  const signupdata : login ={email:email,password:password};
  this.http.post("http://localhost:3000/Users/signup",signupdata).subscribe(response=>{
    console.log(response)
  });
}


login(email:string,password:string){
  const logindata : login ={email:email,password:password};
  this.http.post<{token}>("http://localhost:3000/Users/login",logindata).subscribe(response=>{
    const token = response.token
    this.token=token;
    this.authStatusListener.next(true);
    this.router.navigate(['/PMO/p}rojects'])
  });
}

gettoken(){
  return this.token;
}

getAuthStatusListener(){
  return this.authStatusListener.asObservable();
}








}
