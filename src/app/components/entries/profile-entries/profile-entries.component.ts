import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-profile-entries',
  templateUrl: './profile-entries.component.html',
  styleUrls: ['./profile-entries.component.css']
})
export class ProfileEntriesComponent implements OnInit {
  
  filter: 'POSTED' | 'CORRECTEDPOSTS' = "POSTED";
  innerFilter: 'WAITING' | 'CORRECTED' = "WAITING";
  state$: any;
  @Input() postedPosts: any;
  @Input() correctedPosts: any;
  @Input() correctedPostsOfUser:any;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {}

  setFilter(incoming: 'POSTED' | 'CORRECTEDPOSTS') {
    this.filter = incoming;
  }

  setInnerFilter(incoming: 'WAITING' | 'CORRECTED') {
    this.innerFilter = incoming;
  }
}


