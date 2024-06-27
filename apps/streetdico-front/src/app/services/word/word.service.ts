import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient } from '@angular/common/http';

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
    const getPublisherNameUrl = `https://fa6ayynwlh.execute-api.eu-west-1.amazonaws.com/uat/sd-word-api-publisher-name-lambda?publisher_id=${publisherId}`;
    return this.http.get<string>(getPublisherNameUrl);
  }

  getPublishersNameList(): Observable<string>{    
    const getPublishersNameListUrl = `https://fa6ayynwlh.execute-api.eu-west-1.amazonaws.com/uat/sd-word-api-publishers-name-list`;
    return this.http.get<string>(getPublishersNameListUrl);
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition
  }
  getDefinitionInProgress(): Word | undefined {
    return this.definitionInProgress;
  }
}
