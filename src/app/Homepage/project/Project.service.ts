import{ Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";



import { Router } from '@angular/router';

import{Project} from './project.model';

@Injectable({ providedIn: "root" })
export class ProjectService{

    SelectedProject:Project
constructor (private http: HttpClient,private router:Router){}


createproject(name:string){
    
  const projectname : Project = {name:name}
    this.http.post("http://localhost:3000/Project/",projectname).subscribe(response=>{
      console.log(response)
    });
  }
  
  getprojects(){
      this.http.get("http://localhost:3000/Project/").subscribe(response=>{
        console.log(response)
      });
  }
}