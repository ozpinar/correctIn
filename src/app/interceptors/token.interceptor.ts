import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = JSON.parse(localStorage.getItem("token")!);
    if (token) {
      request = request.clone({
        setHeaders: { 
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error) => {
        if(error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigateByUrl('/');
          }
        }
        return throwError(error);
      })
    )
  }
}
