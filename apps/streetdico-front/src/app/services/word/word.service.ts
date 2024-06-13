import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}
  private allWordsUrl = 'https://fa6ayynwlh.execute-api.eu-west-1.amazonaws.com/uat/sd-word-api-trending-lambda';


  definitionInProgress: Word | undefined;


  getAllWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.allWordsUrl);
  }
  getPublisherName(publisherId: number): Observable<string>{
    const getPublisherNameurl = 'https://fa6ayynwlh.execute-api.eu-west-1.amazonaws.com/uat/sd-word-api-publisher-name-lambda?publisher_id=1';
  //const params = new HttpParams().set('publisher_id', publisherId.toString());
    return this.http.get<string>(getPublisherNameurl);
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition
  }
  getDefinitionInProgress(): Word | undefined {
    return this.definitionInProgress;
  }
}
