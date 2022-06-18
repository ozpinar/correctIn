import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/LoginDto';
import { RegisterDto } from '../models/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginValues: LoginDto) {
    return this.http.post(environment.BASE_URL + '/auth/login', loginValues);
  }

  register(registerValues: RegisterDto) {
    return this.http.post(environment.BASE_URL + '/auth/register', {
      firstName: registerValues.name,
      lastName: registerValues.surname,
      email: registerValues.email,
      password: registerValues.password,
      nativeLanguage: registerValues.native,
      foreignLanguage: registerValues.target,
    });
  }
}
