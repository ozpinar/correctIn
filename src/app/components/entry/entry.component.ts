import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  isEditing = false;
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, autem! At error dolorum nihil iste, facere nemo ex cum officia."

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditing() {
    this.isEditing = !this.isEditing
  }

}
