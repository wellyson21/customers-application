import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilities } from 'src/app/@shared/utilities/utilities';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(Utilities.isLogged){
      Utilities.redirect("/customers");
    }

    return !Utilities.isLogged;
  }
  
}
