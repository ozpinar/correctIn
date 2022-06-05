import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  state$: any;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {}

}
