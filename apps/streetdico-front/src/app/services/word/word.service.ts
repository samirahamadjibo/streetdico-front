import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {
    this.definitionInProgress = {id: 0, name: "", definition: "", flagsCount: 0, dislikesCount: 0, likesCount: 0, creationTimestamp: "", example:"", tags: []}
  }
  private allWordsUrl = 'http://localhost:8080/api/v1/words';
  private definitionInProgress: Word 

  /** never expose the Subject itself. */
  private definitionInProgressSubject = new Subject<Word>();
   /** Observable of all messages */
  definitionInProgress$ = this.definitionInProgressSubject.asObservable();

  getAllWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.allWordsUrl);
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition;
  }
  getDefinitionInProgress(): Observable<Word> {
    return  this.definitionInProgress$;
  }
}
