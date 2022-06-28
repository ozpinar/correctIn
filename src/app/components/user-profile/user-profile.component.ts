import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: any;
  user: any;
  loading: boolean;
  currentUser: any;
  postedPosts: any;
  correctedPosts: any;
  correctedPostsOfUser: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private authService: AuthService, private postService: PostService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  
  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    this.id = this.route.snapshot.paramMap.get('id');
    this.getContent();
  }

  getUser() {
    this.loading = true;
    this.userService.getUserById(this.id).subscribe(res => {
      this.user = res
      this.loading = false;
      if(this.user.id === this.currentUser.id) {
        this.router.navigateByUrl('/profile');
      }
    });
  }

  getPosts() {
    this.loading = true;
    this.postService.getPostsOfUser(this.id).subscribe((res:any) => {
      this.postedPosts = res.posts
      this.loading = false;
    });
  }

  getCorrectedPosts() {
    this.postService.getPostsUserCorrected(this.id).subscribe((res:any) => this.correctedPosts = res.checkedPosts);
  }

  getCorrectedPostsOfUser() {
    this.postService.getCorrectedPostsOfUser(this.id).subscribe((res:any) => this.correctedPostsOfUser = res.checkedPosts);
  }

  getContent() {
    this.getUser();
    this.getPosts();
    this.getCorrectedPosts();
    this.getCorrectedPostsOfUser();
  }
}
