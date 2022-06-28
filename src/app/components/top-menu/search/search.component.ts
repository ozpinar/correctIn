import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchParam = "";
  results: any;
  loading = false;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  clearSearchParam() {
    this.searchParam = "";
    this.results = [];
  }

  searchUser() {
    if(!this.searchParam.length) return;
    this.loading = true;
    this.userService.searchUser(this.searchParam).subscribe((res:any) => {
      this.loading = false;
      this.results = res.users
    });
  }

  navigateToUserProfile(id:number) {
    this.router.navigateByUrl('/profile/'+id);
  }
}
