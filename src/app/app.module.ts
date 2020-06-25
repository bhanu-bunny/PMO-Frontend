import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms'

import { AppRoutingModule ,MainRoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { logininterceptor } from './Homepage/login/login-interceptor';




@NgModule({
  declarations: [
    AppComponent,
    MainRoutingComponents,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:logininterceptor,multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule { }

