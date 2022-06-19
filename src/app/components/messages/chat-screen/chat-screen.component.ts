import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Message {
  type: "sent" | "received",
  message: string;
}
@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChildren('content') content: QueryList<any>;
  username:any
  messageForm: FormGroup;

  messages: Message[] = [
    {type: 'sent', message: '1'},
    {type: 'received', message: '2'},
    {type: 'received', message: '3'},
    {type: 'sent', message: '4'},
    {type: 'received', message: '5'},
    {type: 'sent', message: '6'},
    {type: 'sent', message: '7'},
    {type: 'sent', message: '8'},
    {type: 'sent', message: '9'},
  ]

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    const routeParams = this.route.snapshot.paramMap;
    const usernameFromRoute = routeParams.get('username');
  
    this.username = usernameFromRoute
   }
  ngAfterViewInit(): void {
    this.scrollToTop();
  }

  ngAfterViewChecked() {
    this.content?.last.nativeElement.scrollTo({left: 0 , top: this.content.last.nativeElement.scrollHeight, behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    })
  }

  sendMessage(e: any) {
    e.preventDefault();
    if(!this.messageForm.valid) return;
    this.messages.push({
      type: 'sent',
      message: this.messageForm.get('message')?.value
    })
    this.messageForm.reset();
  }

  scrollToTop() {
    this.content?.first.nativeElement.scrollTo({left: 0 , top: this.content.last.nativeElement.scrollHeight});
  }
}
