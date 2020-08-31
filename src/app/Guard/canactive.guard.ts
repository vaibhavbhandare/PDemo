import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { ObservableComponent } from '../fbm/observable/observable.component';

@Injectable({
  providedIn: 'root'
})

export class CanactiveGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<ObservableComponent> {

  constructor(private userservice: UserService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const status = this.userservice.isuserLogin();
    if (status) {
      return true;
    } else {
      alert(' You do not have Permission for this , Redirecting to the Login');
      this.router.navigate(['/login']);
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const status = this.userservice.isloginCovidMChild();
    if (status) {
      return true;
    } else {
      alert('You Dont have Permission to visit MH child moving to login page');
      this.router.navigateByUrl('/login');
    }
  }

  canDeactivate(): boolean {
    return window.confirm('Are you sure want to navigate');
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}
