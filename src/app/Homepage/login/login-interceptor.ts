import { HttpInterceptor,HttpRequest ,HttpHandler} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class logininterceptor implements HttpInterceptor {
  constructor(private loginservice:LoginService){}
    intercept(req: HttpRequest<any>, next:HttpHandler){
      const loginToken=this.loginservice.gettoken();
      const loginRequest = req.clone({
        headers:req.headers.set('Authorization',"Bearer" + loginToken)
      });
      return next.handle(loginRequest);

    }

}
