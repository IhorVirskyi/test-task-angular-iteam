import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CurrentUser } from 'src/app/core/models/current-user.model';
import { AuthService, CurrentUserService } from 'src/app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  user$: Observable<CurrentUser | null> = this.userService.getUser$();

  constructor(private userService: CurrentUserService,
              private authService: AuthService,
              private router: Router) {
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
