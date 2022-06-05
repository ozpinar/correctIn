import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StreamService } from 'src/app/services/stream.service';
import { setLearn, setTeach } from 'src/app/store/actions/switch.actions';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  state$: Observable<any>;
  
  constructor(private store: Store<{switch: 'TEACH' | 'LEARN'}>, public stream: StreamService) {
    this.state$ = store.select('switch');
   }

  ngOnInit(): void { }

  setState(newState: 'TEACH' | 'LEARN') {
    newState === "TEACH"
    ? this.store.dispatch(setTeach()) 
    : this.store.dispatch(setLearn());
  }
}
