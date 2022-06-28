import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-corrected-entry',
  templateUrl: './corrected-entry.component.html',
  styleUrls: ['./corrected-entry.component.css']
})
export class CorrectedEntryComponent implements OnInit {

  selected:any = []
  isPopupOpen: boolean = false;
  @Input() checkedPost: any;

  text1: any;
  text2: any;
  text1Words: any;
  text2Words: any;
  comment: any;
  date: any;
  isSelf: boolean = false;
  currentUser: any;

  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    if (this.currentUser.id == this.checkedPost.oldPost.user.id) {
      this.isSelf = true;
    }
    this.text1 = this.checkedPost.oldPost.postBody;
    this.text2 = this.checkedPost.postBody;
    this.comment = this.checkedPost.comment;
    this.date = new Date(this.checkedPost.oldPost.createdAt);

    this.text1Words = this.text1.split(" ").map((word: any, idx: any) => {
      return {
        id: idx,
        word: word
      }
    })
  
    this.text2Words = this.text2.split(" ").map((word: any, idx: any) => {
      return {
        id: idx,
        word: word
      }
    })
  }

  wordIsInOriginal(word: any) {
    return this.text1Words.findIndex((text1Word: any) => text1Word.word.toLowerCase() === word.word.toLowerCase()) > -1;
  }

  wordIsInCorrected(word: any) {
    return this.text2Words.findIndex((text2Word: any) => text2Word.word.toLowerCase() === word.word.toLowerCase()) > -1;
  }

  samePlaceIsChanged(idx : number) {
    return this.isModifiedWithoutChangingLength() && this.text1Words[idx].word !== this.text2Words[idx].word;
  }

  isAdded() {
    return this.text1Words.length < this.text2Words.length;
  }

  isDeleted() {
    return this.text1Words.length > this.text2Words.length;
  }

  isModifiedWithoutChangingLength() {
    return this.text1Words.length === this.text2Words.length; 
  }

  navigateByUrl(url:string) {
    this.router.navigateByUrl(url);
  }
}
