import{ Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";


import{entity} from './building.model'
import { Router } from '@angular/router';


@Injectable({ providedIn: "root" })
export class buildingService{

    selectedentity:entity
constructor (private http: HttpClient,private router:Router){}


createEntity(name:entity){
    
    this.http.post("http://localhost:3000/Building/Entities",name).subscribe(response=>{
      console.log(response)
    });
  }
  
}