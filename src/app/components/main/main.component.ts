import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { StreamService } from 'src/app/services/stream.service';
import { EntriesComponent } from '../entries/entries.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  @ViewChild(EntriesComponent) private entriesComponent: EntriesComponent;
  page = 1;
  totalPages: number;
  done = false;
  currentUser: any;
  state$: any;

  constructor(private postService: PostService, private authService: AuthService, private store: Store<{switch: 'TEACH' | 'LEARN'}>, private streamService: StreamService) {
    this.state$ = store.select('switch');
   }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    this.postService.getPostsWithLang(0, this.currentUser.nativeLanguage.id).subscribe((res:any) => this.totalPages = res.totalPages);
  }

  onScroll() {
    if (this.streamService.getValue(this.state$) != "TEACH") return;
    if (this.totalPages === this.page) return;
    this.entriesComponent.getUncheckedPosts(this.page);
    this.page+=1;
    this.done = true;
  }
}
