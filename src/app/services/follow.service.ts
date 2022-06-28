import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  sendFollowRequest(id:number) {
    return this.http.post(environment.BASE_URL + '/api/user/follow/' + id, {});
  }

  acceptFollowRequest(id:number) {
    return this.http.put(environment.BASE_URL + '/api/user/follow/accept/' + id, {});
  }

  withdrawRequest(id:number) {
    return this.http.put(environment.BASE_URL + '/api/user/follow/withdraw/' + id, {});
  }

  getFollowRequests() {
    return this.http.get(environment.BASE_URL + '/api/user/follow/followers-requests');
  }
}
