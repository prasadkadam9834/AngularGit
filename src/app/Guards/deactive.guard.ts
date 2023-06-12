import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<IDeactive> {
  canDeactivate(
    component:IDeactive ,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return component.canexit();
    
  }
  

}
export interface IDeactive{
 canexit():boolean;
}