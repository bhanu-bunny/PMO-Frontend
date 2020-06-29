import{ Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";



import { Router } from '@angular/router';

import{Projects} from './project.model';


@Injectable({ providedIn: "root" })
export class ProjectService{

    SelectedProject:Projects;
    projects:Projects[];
constructor (private http: HttpClient,private router:Router){}


createproject(name:string,_id:string){
    
  const projectname : Projects = {name:name,_id:_id}
    this.http.post("http://localhost:3000/Project/",projectname).subscribe(response=>{
      console.log(response)
    });
  }
  
  getprojects(){
      this.http.get("http://localhost:3000/Project/").subscribe(response=>{
        console.log(response)
        this.projects= response as Projects[]
        
      
      });
  }


}