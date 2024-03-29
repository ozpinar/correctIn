import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.css']
})
export class SideProfileComponent implements OnInit {
  @Input() otherUser: any;
  @Input() loading: any;

  user: any;
  native: any;
  target: any;
  isOther = false;
  followState: "NOTFOLLOWING" | "FOLLOWING" | "SENT" = "NOTFOLLOWING";
  followers: any;
  following: any;
  followerCount: number;
  followingCount: number;
  isFollowersShown: boolean;
  isFollowingsShown: boolean;
  currentUser: any;
  userFollowings: any;

  constructor(private authService: AuthService, private followService: FollowService, private router: Router) { }

  flags: any = {
    'English': "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    'Spanish': "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
    'Turkish': "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
    'Portuguese': "http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg",
    'French': "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    'Italian': "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    'Polish': "http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg",
    'Romanian': "http://purecatamphetamine.github.io/country-flag-icons/3x2/RO.svg"
  }

  ngOnInit(): void {
    if (this.otherUser) {
      this.user = this.otherUser;
      this.isOther = true;
    } else {
      this.authService.currentUser$.subscribe(user => this.user = user);
    }
    this.native = this.user.nativeLanguage.languageName;
    this.target = this.user.foreignLanguage.languageName;
    this.getFollowInformation();
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    this.followService.getFollowInformation(this.currentUser.id).subscribe((res:any) => {
      this.userFollowings = res.followings
      if (this.userFollowings.some((user:any) => user.id == this.user.id)) {
        this.followState = "FOLLOWING";
      } 
    });    
  }

  getFollowInformation() {
    this.followService.getFollowInformation(this.user.id).subscribe((res: any) => {
      this.followers = res.followers;
      this.following = res.followings;
      this.followerCount = res.followersTotalItems;
      this.followingCount = res.followingsTotalItems;
    })
  }



  sendFollowRequest() {
    if (this.followState == "NOTFOLLOWING") {
      this.followService.sendFollowRequest(this.user.id).subscribe(
        () => {
          this.followState = "SENT";
        }
      );
    }
    else if (this.followState == "SENT") {
      this.followService.withdrawRequest(this.user.id, true).subscribe(
        () => {
          this.followState = "NOTFOLLOWING";
        }
      )
    }
  }
  navigateToUserProfile(id:number) {
    this.router.navigateByUrl('/profile/'+id);
  }

  toggleFollowers() {
    if(this.isFollowingsShown) {
      this.isFollowingsShown = false;
    }
    this.isFollowersShown = !this.isFollowersShown;
  }

  toggleFollowings() {
    if(this.isFollowersShown) {
      this.isFollowersShown = false;
    }
    this.isFollowingsShown = !this.isFollowingsShown;
  }
}
