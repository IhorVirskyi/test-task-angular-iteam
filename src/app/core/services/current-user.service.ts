import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser } from 'src/app/core/models/current-user.model';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user$: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(null);

  constructor() {
  }

  getUser$(): Observable<CurrentUser | null> {
    return this.user$.asObservable();
  }

  setUser(user: CurrentUser | null): void {
    this.user$.next(user);
  }
}
