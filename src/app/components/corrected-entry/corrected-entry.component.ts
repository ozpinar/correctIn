import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrected-entry',
  templateUrl: './corrected-entry.component.html',
  styleUrls: ['./corrected-entry.component.css']
})
export class CorrectedEntryComponent implements OnInit {

  selected:any = []
  isPopupOpen: boolean = false;

  text1 = `I am go to school by bus.`

  text2 = `I go to the school by bus.`

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
}
