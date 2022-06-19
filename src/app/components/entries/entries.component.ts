import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from 'src/app/services/post.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  filter: 'EVERYONE' | 'FOLLOWING' = "EVERYONE";
  state$: any;
  uncheckedPosts : any;
  isLoading = true;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService, private postService: PostService) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {
    this.getUncheckedPosts(0);
  }

  setFilter(incoming: 'EVERYONE' | 'FOLLOWING') {
    this.filter = incoming;
  }

  getUncheckedPosts(page: number) {
    this.isLoading = true;
    this.postService.getPosts(page).subscribe((res:any) => {
      page === 0 ? this.uncheckedPosts = res.posts : this.uncheckedPosts.push(...res.posts);
      this.isLoading = false;
    });
  }
}
