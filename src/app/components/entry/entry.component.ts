import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  isEditing = false;
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, autem! At error dolorum nihil iste, facere nemo ex cum officia."
  originalText = this.text;
  comment = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditing() {
    this.isEditing = !this.isEditing
  }

  cancel() {
    this.isEditing = false;
    this.text = this.originalText;
    this.comment = "";
  }

}
