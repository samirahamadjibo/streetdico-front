import { Component, OnInit } from '@angular/core';
import { ActiveWordsService } from '../../services/active-words/active-words.service';
import { Word } from '../../models/word';

@Component({
  selector: 'digitalvitae-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.scss'],
})
export class WordDetailsComponent implements OnInit {
  constructor(private activeWordService: ActiveWordsService) {
    this.activeWords = [];
    this.title = "..."
    this.isThereResult = true
  }

  public activeWords: Word[];
  public title: string;
  public isThereResult: boolean;

  ngOnInit(): void {
    this.getActiveWords()
  }

  getActiveWords(){
    this.activeWordService.activeWords$.subscribe((words: Word[]) => {
      window.scrollTo(0, 0);
      this.activeWords = words;

      if(words.length == 0){
        this.isThereResult = false;
      }

      else if(words[0].name){
        this.title = words[0].name;
      }
    });
  }
}
