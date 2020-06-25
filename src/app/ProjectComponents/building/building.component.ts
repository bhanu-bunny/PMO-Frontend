import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms" ;
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

Towernames(form:NgForm){
  console.log(form.value);  // { first: '', last: '' }
  console.log(form.valid);
}






}
