import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {

  username:any
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    const routeParams = this.route.snapshot.paramMap;
    const usernameFromRoute = routeParams.get('username');
  
    this.username = usernameFromRoute
   }


  ngOnInit(): void {
  }

}
