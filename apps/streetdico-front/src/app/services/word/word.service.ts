import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}
  private allWordsUrl = 'https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/trending-words';


  definitionInProgress: Word | undefined;


  getAllWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.allWordsUrl);
  }

  getPublisherName(publisherId: number): Observable<string>{    
    const getPublisherNameUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/publisher-name?publisher_id=${publisherId}`;
    return this.http.get<string>(getPublisherNameUrl);
  }

  getPageWords(pageNumber: number, itemsPerPage: number): Observable<Word[]>{    
    const getPageWordsUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/all-words?page_number=${pageNumber}&items_per_page=${itemsPerPage}`;
    return this.http.get<Word[]>(getPageWordsUrl);
  }
  
  getWordFromName(name: string): Observable<Word[]>{    
    let getWordFromNameUrl = "";
    if(name.length <= 2){
      getWordFromNameUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/search-word?name=${name}`;
    }   
    else{
      getWordFromNameUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/search-word/partial?name=${name}`;
    }
    return this.http.get<Word[]>(getWordFromNameUrl);
  }

  getPublishersNameList(): Observable<string>{    
    const getPublishersNameListUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/publisher-names`;
    return this.http.get<string>(getPublishersNameListUrl);
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
    return this.http.post<string>(reportUrl, {"doReport": doReport, "word_id": wordId});
  }

  like(doLike: boolean,  wordId: number): Observable<number>{    
    const likeUrl = `https://9bbxelsa9d.execute-api.eu-west-1.amazonaws.com/uat/like`;
    return this.http.post<number>(likeUrl, {"doLike": doLike, "word_id": wordId});
  }
}
