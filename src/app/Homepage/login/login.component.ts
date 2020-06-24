import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {  NgForm } from "@angular/forms" ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService],
})
export class LoginComponent implements OnInit {

  constructor( public loginservice:LoginService) { }

onsignup(form:NgForm){
 if(form.invalid){
  return;
 }
this.loginservice.createuser(form.value.email,form.value.password);
this.resetform(form)
}

onlogin(form:NgForm){
  this.loginservice.login(form.value.email,form.value.password);

}
  ngOnInit(): void {
    this.resetform();
  }

 resetform(form?:NgForm){
  if (form)
  form.reset();
this.loginservice.selecteduser = {
  email:"",
  password:""
}

 }
signin(){
  var x= document.getElementById("login");
  var y= document.getElementById("signin");
  var z= document.getElementById("btn");
  x.style.left = "-480px";
  y.style.left = "50px";
  z.style.left = "110px";
}

login(){
  var x= document.getElementById("login");
  var y= document.getElementById("signin");
  var z= document.getElementById("btn");
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}



}
