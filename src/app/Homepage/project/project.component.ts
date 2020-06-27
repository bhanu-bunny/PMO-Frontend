import { Component, OnInit } from '@angular/core';
import{ NgForm }  from '@angular/forms'
import{ProjectService  } from './Project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(public Projectservice:ProjectService) { }

  ngOnInit(): void {

  }
 projectcreated(form:NgForm){
  
   this.Projectservice.createproject(form.value.name)
 }

 refreshProjectList() {
  this.Projectservice.getprojects()
  //  this.Projectservice.employees = res as Employee[];

}

}


