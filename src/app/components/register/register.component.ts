import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  languages = [
    'English',
    'Spanish',
    'French',
    'Portuguese',
    'Turkish',
    'Italian',
    'Polish',
    'Romanian'
  ];

  ngOnInit(): void {
  }

}
