import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, ReplaySubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/LoginDto';
import { RegisterDto } from '../models/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

  login(loginValues: LoginDto) {
   return this.http.post(environment.BASE_URL + '/api/auth/login', loginValues).pipe(
    map((response: any) => {
      const { user } = response;
      if (user) {
        this.setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(response['jwt-token']));
      }
    }),
    catchError((error: any) => {
      return throwError(error);
    })
   )
  }

  register(registerValues: RegisterDto) {
    return this.http.post(environment.BASE_URL + '/api/auth/register', {
      firstName: registerValues.name,
      lastName: registerValues.surname,
      email: registerValues.email,
      password: registerValues.password,
      nativeLanguage: registerValues.native,
      foreignLanguage: registerValues.target,
    });
  }
  
  setUser(user: any) {
    this.currentUserSource.next(user);
  }
}
