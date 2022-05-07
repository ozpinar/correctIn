import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-element',
  templateUrl: './navigation-element.component.html',
  styleUrls: ['./navigation-element.component.css']
})
export class NavigationElementComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
