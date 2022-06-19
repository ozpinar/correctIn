import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications = [
    {type: 'notification', message: 'x corrected your post.'},
    {type: 'message', message: 'x sent you a message.'},
    {type: 'message', message: 'x sent you a message.'},
    {type: 'notification', message: 'x corrected your post.'},
    {type: 'notification', message: 'x corrected your post.'},
  ];

  messageNotifications:any = [];
  correctNotifications:any = [];

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
    this.messageNotifications = this.getMessageNotifications();
    this.correctNotifications = this.getCorrectNotifications()
  }
  
  ngOnInit(): void {

  }

  togglePopup() {
    this.isOpen = !this.isOpen;
  }

  setState(incomingState: "NOTIFICATIONS" | "MESSAGES") {
    this.state = incomingState;
  }

  getMessageNotifications() {
    return this.notifications.filter(messageNotification => messageNotification.type === 'message');
  }

  getCorrectNotifications() {
    return this.notifications.filter(notification => notification.type === 'notification');
  }

}
