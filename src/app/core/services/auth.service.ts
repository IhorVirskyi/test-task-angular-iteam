import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, UserDetails } from '../models';
import { TokenStore } from './store/token.store';
import { CurrentUserService } from 'src/app/core/services/current-user.service';


const BASE_URL = environment.apiUrl;
const routes = {
  login: () => `${BASE_URL}/login`
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenStore: TokenStore,
              private userService: CurrentUserService) {

  }

  login(credentials: Credentials): Observable<boolean> {
    return this.http.post<UserDetails>(routes.login(), credentials)
      .pipe(
        tap(result => {
          this.tokenStore.setToken(result.token);
          this.userService.setUser({
            first_name: result.first_name,
            last_name: result.last_name,
            role: result.role
          });
        }),
        map(() => true)
      );
  }

  logout(): void {
    this.tokenStore.setToken(null);
    this.userService.setUser(null);
  }

}
