import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}
  private allWordsUrl = '';

  definitionInProgress: Word | undefined;


  getAllWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.allWordsUrl);
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition
  }
  getDefinitionInProgress(): Word | undefined {
    return this.definitionInProgress;
  }
}
