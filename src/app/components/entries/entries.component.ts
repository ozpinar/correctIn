import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  @Input() done:any;

  currentUser: any;
  filter: 'EVERYONE' | 'FOLLOWING' = "EVERYONE";
  state$: any;
  uncheckedPosts : any;
  checkedPosts: any;
  isLoading = true;
  message = false;
  followFilteredPosts: any;
  followFilteredCheckedPosts: any;
  userFollowings: any;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService, private postService: PostService, private authService:AuthService, private followService: FollowService) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    this.getUncheckedPosts(0);
    this.getCheckedPosts();
    this.getUserFollowings();
  }

  setFilter(incoming: 'EVERYONE' | 'FOLLOWING') {
    this.filter = incoming;
    if(incoming == "FOLLOWING") {
      this.filterPosts();
      this.filterCheckedPosts();
    }
  }

  getUncheckedPosts(page: number) {
    this.isLoading = true;
    this.postService.getPostsWithLang(page, this.currentUser.nativeLanguage.id).subscribe((res:any) => {
      page === 0 ? this.uncheckedPosts = res.posts : this.uncheckedPosts.push(...res.posts);
      this.isLoading = false;
    });
  }

  getCheckedPosts() {
    this.isLoading = true;
    this.postService.getCheckedPosts(this.currentUser.foreignLanguage.id).subscribe((res:any) => {
      this.checkedPosts = res.checkedPosts;
      this.isLoading = false;
    });
  }

  removeElement(id: any) {
    this.uncheckedPosts = this.uncheckedPosts.filter((post:any) => post.id !== id); 
    this.message = true;
    setTimeout(() => {
      this.message = false;
    }, 1500);
  }

  filterPosts(){
    this.followFilteredPosts = this.uncheckedPosts.filter((post: any) => {
      return this.userFollowings.some((user:any) => user.id == post.user.id);
    });
  }

  filterCheckedPosts() {
    this.followFilteredCheckedPosts = this.checkedPosts.filter((post: any) => {
      return this.userFollowings.some((user:any) => user.id == post.user.id);
    });
  }

  getUserFollowings() {
    this.followService.getFollowInformation(this.currentUser.id).subscribe((res:any) => this.userFollowings = res.followings);
  }
}
