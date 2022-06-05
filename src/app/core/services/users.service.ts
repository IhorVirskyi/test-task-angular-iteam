import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl;
const routes = {
  users: () => `${BASE_URL}/users`
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(routes.users());
  }
}
