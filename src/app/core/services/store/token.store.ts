import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStore {

  private tokenData: string | null = null;

  constructor() {
  }

  setToken(token: string | null) {
    this.tokenData = token;
  }

  getToken(): string | null {
    return this.tokenData;
  }
}
