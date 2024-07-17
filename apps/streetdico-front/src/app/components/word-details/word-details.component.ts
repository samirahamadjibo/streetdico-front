import { Component, OnInit } from '@angular/core';
import { ActiveWordsService } from '../../services/active-words/active-words.service';
import { Word } from '../../models/word';

@Component({
  selector: 'digitalvitae-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.scss'],
})
export class WordDetailsComponent implements OnInit{
  constructor(private activeWordService: ActiveWordsService) {
    this.activeWords = [];
    this.isThereResult = true;
    this.title = "...";
  }

  public activeWords: Word[];
  public title: string;
  public isThereResult: boolean;

  ngOnInit(): void {
    console.log("1"+ this.title);
    this.getSearchText();
    this.getActiveWords();
    console.log("2" +this.title);
    
  }

  getSearchText(){
    this.activeWordService.searchText$.subscribe((text: string) => {
      this.title = text;
      console.log("3" +this.title);
    });
  }

  getActiveWords(){
    this.activeWordService.activeWords$.subscribe((words: Word[]) => {
      window.scrollTo(0, 0);
      this.activeWords = words;

      this.isThereResult = words.length != 0
    });
  }
}
