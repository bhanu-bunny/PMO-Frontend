import { Component, OnInit } from '@angular/core';
import {  NgForm, FormsModule } from "@angular/forms" ;


import {buildingService} from './Building.service';
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
 
  constructor(public buildingservice:buildingService) { }

  ngOnInit(): void {
  }


  TowersnameNo =[];
  Towersnamealpha=[];


Towernames(form:NgForm){
  this.TowersnameNo=[];
  this.Towersnamealpha=[];
  var a= form.controls['TowerNo'].value;
  
  for (var o = 1; o <=100; o++){
  var elem = document.getElementById("newInputBox");
    if(elem)
    {elem.parentNode.removeChild(elem);}
      }
  for (let i = 1; i <= a; i++) {
    this.TowersnameNo.push("Tower"+ i);
    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');
  // Then add the content (a new input box) of the element.
txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
  // Finally put it where it is supposed to appear.
document.getElementById("newElementId").appendChild(txtNewInputBox);
   }
  var k= 65 ;
  var j = a + k;
  console.log(j);
  for (let i = 65; i < j ; i++) {
  this.Towersnamealpha.push("Tower"+ String.fromCharCode(i));
  }}



selectedtowername(){
  var aa=this.TowersnameNo.values()
  for (let elements of aa) { 

  this.buildingservice.createEntity(elements);
  }
};



};
