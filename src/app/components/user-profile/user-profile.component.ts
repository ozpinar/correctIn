import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: any;
  user: any;
  loading: boolean;
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

  getUser() {
    this.loading = true;
    this.userService.getUserById(this.id).subscribe(res => {
      this.user = res
      this.loading = false;
    });
  }
}
