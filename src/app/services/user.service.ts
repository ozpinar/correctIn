import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserById(id:number) {
    return this.http.get(environment.BASE_URL + '/api/user/' + id);
  }

  searchUser(query: string) {
    return this.http.get(environment.BASE_URL + '/api/user?s=' + query);
  }

  updateUser(id:any, values:any) {
    return this.http.patch(environment.BASE_URL + '/api/user/' + id, {
      firstName: values.name,
      lastName: values.surname,
      email: values.email,
      nativeLanguageId: values.native,
      foreignLanguageId: values.target,
    })
  }
}
