import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }
  private wordUrl = "ec2-18-233-151-60.compute-1.amazonaws.com:8080/api/v1/words"

  getTrendingWords() {
    return this.http.get<Word[]>(this.wordUrl);
  }
}