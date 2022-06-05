import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  state$: any;
  pageState: any;

  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>) {
    this.state$ = store.select('switch');
  }

  ngOnInit(): void {
    this.state$.subscribe((state:any) => this.pageState = state);
  }

}
