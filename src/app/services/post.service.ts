import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  currentUser:any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
  }
  
  getPostsWithLang(page: number, lang: number) {
    return this.http.get(environment.BASE_URL + `/api/post/all?sortBy=createdAt&size=5&orderBy=desc&page=${page}&foreignLanguageId=${lang}`);
  }

  getPostsOfUser(id: number) {
    return this.http.get(environment.BASE_URL + '/api/post/all?sortBy=createdAt&orderBy=desc&userId=' + id);
  }

  getPostsUserCorrected(id: number) {
    return this.http.get(environment.BASE_URL + '/api/post/checked-post/all?sortBy=createdAt&orderBy=desc&userId=' + id);
  }

  getCorrectedPostsOfUser(id: number) {
    return this.http.get(environment.BASE_URL + '/api/post/checked-post/all?sortBy=createdAt&orderBy=desc&oldPostUserId=' + id);
  }

  createPost(postValues: any) {
    return this.http.post(environment.BASE_URL + '/api/post/', {
      postTitle: postValues.text,
      postBody: postValues.text,
    });
  }

  checkPost(id: any, newText: any, comment: any){
    return this.http.post(environment.BASE_URL + '/api/post/checked-post', {
      oldPostId: id,
      postBody: newText,
      comment: comment,
    })
  }

  getCheckedPosts(lang: number){ 
    return this.http.get(environment.BASE_URL + `/api/post/checked-post/all?sortBy=createdAt&orderBy=desc&nativeLanguageId=${lang}`)
  }

  deletePost(id:any) {
    return this.http.put(environment.BASE_URL + '/api/user/' + id, {});
  }

  editPost(id:any, postBody:string) {
    return this.http.put(environment.BASE_URL + '/api/post/' + id, {
      postBody: postBody,
      postTitle: postBody,
    });
  }
}
