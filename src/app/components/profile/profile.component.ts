import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private postService: PostService, private authService: AuthService) { }
  user: any;
  postedPosts: any;
  correctedPosts: any;
  correctedPostsOfUser: any;
  loading: boolean;

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.user = res);
    this.getPosts();
    this.getCorrectedPosts();
    this.getCorrectedPostsOfUser();
  }

  getPosts() {
    this.loading = true;
    this.postService.getPostsOfUser(this.user?.id).subscribe((res:any) => {
      this.postedPosts = res.posts
      this.loading = false;
    });
  }

  getCorrectedPosts() {
    this.postService.getPostsUserCorrected(this.user?.id).subscribe((res:any) => this.correctedPosts = res.checkedPosts);
  }

  getCorrectedPostsOfUser() {
    this.postService.getCorrectedPostsOfUser(this.user?.id).subscribe((res:any) => this.correctedPostsOfUser = res.checkedPosts);
  }
}
