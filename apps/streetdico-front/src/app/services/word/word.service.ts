import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}
  private allWordsUrl = 'http://localhost:8080/api/v1/words';

  getAllWords() {
    return this.http.get<Word[]>(this.allWordsUrl);
  }

  getWordInProgress() {
    return {
      id: -1,
      name: 'Samira',
      definition:
        "créatrice du dictionnaire urbain. Exemple: Aujourd'hui je suis allée à la teuf de Roland, c'était hyper chouette. Je le referai surement et cela dans une meilleure vie",
    };
  }
}
