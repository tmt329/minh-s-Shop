import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let authService= this.injector.get(AuthService)
    
    const token= authService.getToken();

    if(token)
    { 
      console.log("hi");
      
      const copyReq = request.clone({
        params: request.params.set('token', authService.getToken())
      });
      return next.handle(copyReq)
    }
    else 
    { console.log("ni");
    
      return next.handle(request);
    }
    
  }
}
