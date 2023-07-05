import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word/word.service';
import { Word } from '../../models/word';

@Component({
  selector: 'digitalvitae-user',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(private wordService: WordService) {}

  wordInProgress: Word = {} as Word;

  getTrendingWords(): void{
    this.wordInProgress = this.wordService.getWordInProgress();
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
