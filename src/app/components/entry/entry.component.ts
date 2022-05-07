import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Quos cum ea aliquam blanditiis, saepe labore illo odit aliquid 
  temporibus dicta vero harum deserunt tempora quas voluptatem 
  ipsa corporis dolores nesciunt? Ad, ex deleniti corrupti quaerat 
  explicabo suscipit excepturi, placeat perspiciatis consequuntur, 
  saepe enim hic aliquam impedit ducimus officiis aliquid voluptatibus! 
  Beatae eveniet temporibus neque asperiores consequuntur aspernatur 
  maiores excepturi distinctio architecto nulla quo, expedita pariatur 
  saepe sit est repellendus vero porro! Quas temporibus maiores alias?`

  words = this.lorem.split(" ");

  constructor() { }

  ngOnInit(): void { }
}
