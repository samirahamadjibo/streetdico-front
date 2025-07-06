import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}
  definitionInProgress: Word | undefined;


  getAllWords(): Observable<Word[]>{
    const allWordsUrl = 'https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/trending-words';
    return this.http.get<Word[]>(allWordsUrl);
  }

  getPublisherName(publisherId: number): Observable<string>{    
    const getPublisherNameUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/publisher-name?publisher_id=${publisherId}`;
    return this.http.get<string>(getPublisherNameUrl);
  }

  getPageWords(pageNumber: number, itemsPerPage: number): Observable<Word[]>{    
    const getPageWordsUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/all-words?page_number=${pageNumber}&items_per_page=${itemsPerPage}`;
    console.log(pageNumber, itemsPerPage);
    return this.http.get<Word[]>(getPageWordsUrl);
  }
  
  getWordFromName(name: string): Observable<Word[]>{    
    const getWordFromNameLevUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/search-word/lev?name=${name}`;
    return this.http.get<Word[]>(getWordFromNameLevUrl);
  }

  getPublishersNameList(): Observable<string[]>{    
    const getPublishersNameListUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/publisher-names`;
    return this.http.get<string[]>(getPublishersNameListUrl);
  }

  setDefinitionInProgress(definition : Word){
    this.definitionInProgress = definition
  }
  getDefinitionInProgress(): Word | undefined {
    return this.definitionInProgress;
  }

  postNewWord(newWord: Word): Observable<string>{    
    newWord.tags = newWord.tags?.toString();
    const postNewWordUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/add-word`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<string>(postNewWordUrl, newWord, {headers});
  }

  report(doReport: boolean, wordId: number): Observable<string>{    
    const reportUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/report`;
    return this.http.post<string>(reportUrl, {"doReport": doReport, "wordId": wordId});
  }

  like(doLike: boolean,  wordId: number): Observable<number>{    
    const likeUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/like`;
    return this.http.post<number>(likeUrl, {"doLike": doLike, "wordId": wordId});
  }

  dislike(doDislike: boolean,  wordId: number): Observable<number>{    
    const dislikeUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/dislike`;
    return this.http.post<number>(dislikeUrl, {"doDislike": doDislike, "wordId": wordId});
  }
}
