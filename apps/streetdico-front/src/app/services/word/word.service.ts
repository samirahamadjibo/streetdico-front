import { Injectable } from '@angular/core';
import { Word } from '../../models/word';

import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }
  private wordUrl = "http://localhost:8080/api/v1/words"

  words: Word[] = [ 
    {id:1 , name: "gechar", definition: "chargée"} as Word,
    {id:1 , name: "meuf", definition: "femme"} as Word,
    {id:1 , name: "mec", definition: "garcon, homme"} as Word
  ]

  getWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.wordUrl);
  }
}