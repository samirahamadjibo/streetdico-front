import { Injectable } from '@angular/core';
import { Word } from '../../models/word';

@Injectable({
  providedIn: 'root'
})
export class ActiveWordsService {
  private activeWords: Word[] = []

  resetActiveWords(){
    this.activeWords = []
  }

  getActiveWords(){
    return this.activeWords
  }

  setActiveWords(words: Word[]) {
    this.activeWords = words;
  }

  setActiveWord(word: Word){
    this.activeWords.push(word);
  }

}
