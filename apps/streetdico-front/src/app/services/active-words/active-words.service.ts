import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveWordsService {
  private activeWords = new Subject<Word[]>();
  activeWords$ = this.activeWords.asObservable();

  latestActiveWords: Word[] = [] 


  setActiveWords(words: Word[]) {
    this.activeWords.next(words);
    this.latestActiveWords = words;
  }

  getLatestActiveWord(): Word[]{
    return this.latestActiveWords;
  }
}
