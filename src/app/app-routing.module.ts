import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Homepage/home/home.component';
import { LoginComponent } from './Homepage/login/login.component';
import {HeaderComponent } from './Homepage/header/header.component';
import { ProjectComponent } from './Homepage/project/project.component';
import { ProjectHomeComponent } from './ProjectComponents/project-home/project-home.component';
import { BuildingComponent } from './ProjectComponents/building/building.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'} ,
  {path:'Home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'PMO',component:HeaderComponent ,
  children:[
    { path:'projects',component:ProjectComponent},
    { path:'building',component:BuildingComponent}, 
    { path:'Home',component:ProjectHomeComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const MainRoutingComponents=[HomeComponent,LoginComponent,HeaderComponent,ProjectComponent]
