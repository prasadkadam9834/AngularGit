import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class CanactiveGuard implements CanActivate {
  constructor(private Login: LoginserviceService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.Login.loginuser) {
      return true;
    }
    else {

      this.route.navigate(['/login'])
      return false;
    }

  }
}


