import { Component, OnInit } from '@angular/core';
import{ NgForm }  from '@angular/forms'
import{ProjectService  } from './Project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers:[ ProjectService]
})
export class ProjectComponent implements OnInit {

  constructor(public Projectservice:ProjectService) { }

  ngOnInit(): void {
this.refreshProjectList();
  }
 projectcreated(form:NgForm){
  
   this.Projectservice.createproject(form.value.projectname,form.value._id);
   this.refreshProjectList();
 }

 refreshProjectList() {
  this.Projectservice.getprojects();
  this.Projectservice.projects;

}

projectselected(id :string){
 
 console.log( this.Projectservice.projects.find(a=>a._id==id)._id)
}
}


