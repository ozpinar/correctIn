import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private authService: AuthService) { }

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
    } else {
      this.authService.currentUser$.subscribe(user => this.user = user);
    }
    this.native = this.user.nativeLanguage.languageName;
    this.target = this.user.foreignLanguage.languageName;
  }

}
