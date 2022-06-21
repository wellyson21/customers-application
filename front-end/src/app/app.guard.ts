import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilities } from './@shared/utilities/utilities';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(!Utilities.isLogged){
      Utilities.redirect("/auth/login");
    }

    return Utilities.isLogged;
  }
  
}
