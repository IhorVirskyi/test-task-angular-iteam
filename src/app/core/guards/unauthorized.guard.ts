import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStore } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard implements CanActivate {

  constructor(private tokenStore: TokenStore,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isUnauthorized = this.tokenStore.getToken() === null;

    if (!isUnauthorized) {
      this.router.navigate(['dashboard']);
    }
    return isUnauthorized;
  }

}
