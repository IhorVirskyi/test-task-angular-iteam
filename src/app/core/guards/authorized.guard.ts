import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStore } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {

  constructor(private tokenStore: TokenStore,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasToken = this.tokenStore.getToken() != null;

    if (!hasToken) {
      this.router.navigate(['login']);
    }
    return hasToken;
  }

}
