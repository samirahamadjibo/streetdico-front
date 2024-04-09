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
    const test = this.http.get<Word[]>(this.allWordsUrl);
    console.log(test)
    return test;
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition
  }
  getDefinitionInProgress(): Word | undefined {
    return this.definitionInProgress;
  }
}
