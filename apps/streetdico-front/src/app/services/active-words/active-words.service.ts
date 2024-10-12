import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveWordsService {
  private activeWords = new Subject<Word[]>();
  activeWords$ = this.activeWords.asObservable();

  private searchText = new Subject<string>();
  searchText$ = this.searchText.asObservable();

  getActiveWords(): Observable<Word[]>{
    return this.activeWords
  }

  setActiveWords(words: Word[]) {
    this.activeWords.next(words);
  }

  setSearchText(text: string) {
    this.searchText.next(text);
  }

  getSearchText() {
    return this.searchText;
  }

}
