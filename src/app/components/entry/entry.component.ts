import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() id: any;
  @Input() text = "";
  @Input() user: any;
  @Input() date: any;

  isEditing = false;
  comment = "";
  originalText = "";
  
  constructor() { }
  
  ngOnInit(): void {
    this.originalText = this.text;
    this.date = new Date(this.date);
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
