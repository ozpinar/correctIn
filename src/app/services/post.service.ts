import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  getPosts(page: number) {
    return this.http.get(environment.BASE_URL + '/api/post/all?sortBy=createdAt&size=5&page=' +page)
  }

  createPost(postValues: any) {
    return this.http.post(environment.BASE_URL + '/api/post/', {
      postTitle: postValues.text,
      postBody: postValues.text,
    });
  }

  checkPost(id: any, newText: any){
    return this.http.post(environment.BASE_URL + '/api/post/checked-post', {
      oldPostId: id,
      postBody: newText,
    })
  }
}
