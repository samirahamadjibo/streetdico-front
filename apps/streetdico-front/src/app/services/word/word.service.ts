import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }
  private wordUrl = "http://localhost:8080/api/v1/words/trending"

  getTrendingWords() {
    return this.http.get<Word[]>(this.wordUrl);
  }
}