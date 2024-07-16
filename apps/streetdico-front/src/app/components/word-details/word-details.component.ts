import { Component, OnInit } from '@angular/core';
import { ActiveWordsService } from '../../services/active-words/active-words.service';
import { Word } from '../../models/word';

@Component({
  selector: 'digitalvitae-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.scss'],
})
export class WordDetailsComponent implements OnInit {
  constructor(private activeWordService: ActiveWordsService) {}

  public activeWords: Word[] = []

  ngOnInit(): void {
    this.getActiveWords()
  }

  getActiveWords(){
    this.activeWords = this.activeWordService.getActiveWords();
  }
}
