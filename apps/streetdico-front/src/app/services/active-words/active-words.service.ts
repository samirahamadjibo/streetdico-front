import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveWordsService {
  private activeWords = new Subject<Word[]>();
  activeWords$ = this.activeWords.asObservable();

  private searchText = ""

  getActiveWords(): Observable<Word[]>{
    return this.activeWords
  }

  setActiveWords(words: Word[]) {
    this.activeWords.next(words);
  }

  setSearchText(text: string) {
    this.searchText = text
  }

  getSearchText() {
    return this.searchText;
  }

}
