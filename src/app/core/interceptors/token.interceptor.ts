import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStore } from 'src/app/core/services';

const TOKEN_HEADER_NAME = 'X-Token';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenStore: TokenStore) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStore.getToken();

    if (!token) {
      return next.handle(request);
    }

    const modifiedReq = request.clone({
      headers: request.headers.set(TOKEN_HEADER_NAME, token)
    });
    return next.handle(modifiedReq);
  }
}
