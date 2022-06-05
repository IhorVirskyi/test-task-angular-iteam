import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: CurrentUserService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUser$()
      .pipe(
        map(user => user?.role === 'Admin'),
        tap(isAdmin => {
          if (!isAdmin) {
            this.router.navigate(['dashboard']);
          }
        })
      );
  }

}
