import { Component, OnInit } from '@angular/core';
import { ActiveWordsService } from '../../services/active-words/active-words.service';
import { Word } from '../../models/word';
import { finalize, tap } from 'rxjs';

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
  public isWordLoading = true;
  public skeletonWords: Word[] = [];  

  ngOnInit(): void {
    this.setSkeletonWords()
    this.getSearchText();
    this.getActiveWords();
  }

  setSkeletonWords(){
    this.skeletonWords.push(new Word)
    this.skeletonWords.push(new Word)
    this.skeletonWords.push(new Word)
    this.activeWords = this.skeletonWords
  }

  getSearchText(){
    this.title = this.activeWordService.getSearchText()
  }

  getActiveWords(){
    this.activeWordService.getActiveWords().pipe(
      tap(() => {
        this.isWordLoading = false; 
      }),
      finalize(() => {
        this.isWordLoading = false;
      }),
    ).subscribe((words: Word[]) => {
      this.activeWords = words;
      this.isThereResult = this.activeWords.length != 0;
    });    
  }
}
