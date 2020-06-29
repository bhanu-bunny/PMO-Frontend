import{ Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";


import{Entity} from './building.model'
import { Router } from '@angular/router';


@Injectable({ providedIn: "root" })
export class buildingService{

    selectedentity:Entity
constructor (private http: HttpClient,private router:Router){}


createEntity(Project:string,EntityName:string,EntityCode:string){
  const entityname : Entity = {project:Project,entityname:EntityName,entitycode:EntityCode}
    this.http.post("http://localhost:3000/Building/Entities",entityname).subscribe(response=>{
      console.log(response)
    });
  }

}