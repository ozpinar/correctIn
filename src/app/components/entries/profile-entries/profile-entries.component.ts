import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-profile-entries',
  templateUrl: './profile-entries.component.html',
  styleUrls: ['./profile-entries.component.css']
})
export class ProfileEntriesComponent implements OnInit {
  
  filter: 'WAITINGPOSTS' | 'CORRECTEDPOSTS' = "WAITINGPOSTS";
  state$: any;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {}

  setFilter(incoming: 'WAITINGPOSTS' | 'CORRECTEDPOSTS') {
    this.filter = incoming;
  }
}


