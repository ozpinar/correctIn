import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLearn, setTeach } from 'src/app/store/actions/switch.actions';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  state$: Observable<any>;
  switchState: any;
  
  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>) {
    this.state$ = store.select('switch');
   }

  ngOnInit(): void { 
    this.state$.subscribe(state => this.switchState = state);
  }

  setState(newState: 'TEACH' | 'LEARN') {
    newState === "TEACH" ? this.store.dispatch(setTeach()) : this.store.dispatch(setLearn());
  }
}
