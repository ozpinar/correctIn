import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications = ["123","456","789"];
  isOpen = false;
  state: "NOTIFICATIONS" | "MESSAGES" = "NOTIFICATIONS";
  
  @ViewChild('menu') menu: ElementRef | undefined;
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
     if (!this.menu?.nativeElement.contains(event.target)) {
        this.isOpen = false;
     }
  }

  constructor() { 

  }
  
  ngOnInit(): void {
  }

  togglePopup() {
    this.isOpen = !this.isOpen;
  }


  setState(incomingState: "NOTIFICATIONS" | "MESSAGES") {
    this.state = incomingState;
  }

}
