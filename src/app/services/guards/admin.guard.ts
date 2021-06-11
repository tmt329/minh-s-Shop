import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private isAdmin:boolean 
   constructor(
    private authService : AuthService ,
    
 
) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      

    // var user= JSON.parse(localStorage.getItem('user')) 
    if(this.authService.getUser() &&this.authService.getUser().level ==2)
    {
      return true 
    }
    else
    return false ;
  }
  
}
