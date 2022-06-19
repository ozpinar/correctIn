import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
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

  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.postService.getPosts(0).subscribe((res:any) => this.totalPages = res.totalPages);
  }

  onScroll() {
    if (this.totalPages === this.page) {return};
    this.entriesComponent.getUncheckedPosts(this.page);
    this.page+=1;
    this.done = true;
  }
}
