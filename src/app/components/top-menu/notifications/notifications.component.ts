import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  requests:any;

  isOpen = false;
  
  @ViewChild('menu') menu: ElementRef | undefined;
  @HostListener('document:mousedown', ['$event'])

  onGlobalClick(event: any): void {
     if (!this.menu?.nativeElement.contains(event.target)) {
        this.isOpen = false;
     }
  }

  constructor(private followService: FollowService, private router: Router) { }
  
  ngOnInit(): void {
    this.getFollowRequests();
  }

  togglePopup() {
    this.isOpen = !this.isOpen;
  }

  getFollowRequests() {
    this.followService.getFollowRequests().subscribe((res: any) => this.requests = res.followerRequests)
  }

  acceptRequest(id:number) {
    this.followService.acceptFollowRequest(id).subscribe(() => {
      this.requests.filter((request:any) => request.id !== id);
    })
  }

  denyRequest(id:Number) {

  }

  navigateByUrl(url:string) {
    this.router.navigateByUrl(url);
  }
}
