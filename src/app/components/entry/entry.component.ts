import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  selected:any = []
  isPopupOpen: boolean = false;

  text1 = `I am son my way ss school.`

  text2 = `I am on my way to school.`

  text1Words = this.text1.split(" ").map((word, idx) => {
    return {
      id: idx,
      word: word
    }
  })

  text2Words = this.text2.split(" ").map((word, idx) => {
    return {
      id: idx,
      word: word
    }
  })

  constructor() { }

  ngOnInit(): void { }

  wordIsInOriginal(word: any) {
    return this.text1Words.findIndex(text1Word => text1Word.word.toLowerCase() === word.word.toLowerCase()) > -1;
  }

  wordIsInCorrected(word: any) {
    return this.text2Words.findIndex(text2Word => text2Word.word.toLowerCase() === word.word.toLowerCase()) > -1;
  }

  samePlaceIsChanged(idx : number) {
    return this.text1Words[idx].word !== this.text2Words[idx].word;
  }
}
