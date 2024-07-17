import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveWordsService {
  private activeWords = new Subject<Word[]>();
  activeWords$ = this.activeWords.asObservable();

  private searchText = new Subject<string>();
  searchText$ = this.searchText.asObservable();



  setActiveWords(words: Word[]) {
    this.activeWords.next(words);
  }

  setSearchText(text: string) {
    this.searchText.next(text);
  }

}
