import { Component, OnInit } from '@angular/core';
import { ActiveWordsService } from '../../services/active-words/active-words.service';
import { Word } from '../../models/word';
import { finalize } from 'rxjs';

@Component({
  selector: 'digitalvitae-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.scss'],
})
export class WordDetailsComponent implements OnInit{
  constructor(private activeWordService: ActiveWordsService) {
    this.activeWords = [];
    this.isThereResult = undefined;
    this.title ="";
  }

  public activeWords: Word[];
  public title: string;
  public isThereResult: boolean|undefined;
  public isWordLoading= true;

  ngOnInit(): void {
    this.getSearchText();
    this.getActiveWords();
  }

  getSearchText(){
    this.activeWordService.searchText$.subscribe((text: string) => {
      this.title = text;
    });
  }

  getActiveWords(){
    this.activeWordService.getActiveWords().pipe(
      finalize(() => {
        this.isWordLoading = true;
        window.scrollTo(0, 0);
      })
    ).subscribe((words: Word[]) => {
      this.activeWords = words;
      this.isThereResult = this.activeWords.length != 0;
      this.isWordLoading = false;
    });    
  }
}
