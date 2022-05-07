import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  state: 'TEACH' | 'LEARN' = 'TEACH';

  constructor() { }

  ngOnInit(): void {
  }

  setState(newState: 'TEACH' | 'LEARN') {
    this.state = newState
  }

}
