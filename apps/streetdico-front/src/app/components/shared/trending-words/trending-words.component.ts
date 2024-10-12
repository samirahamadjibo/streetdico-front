import { Component, OnInit } from '@angular/core';
import { Word } from '../../../models/word';
import { WordService } from '../../../services/word/word.service';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'digitalvitae-trending-words',
  templateUrl: './trending-words.component.html',
  styleUrls: ['./trending-words.component.scss'],
})
export class TrendingWordsComponent implements OnInit {
  constructor(private wordService: WordService,  private router: Router) { }
  
  skeletonWords: Word[] = [];  
  trendingWords: Word[] = [];
  isWordLoading = true;

  setSkeletonWords(){
    this.skeletonWords.push(new Word)
    this.skeletonWords.push(new Word)
    this.skeletonWords.push(new Word)
    this.trendingWords = this.skeletonWords
  }

  getTrendingWords(): void{
    this.isWordLoading = true;
    this.wordService.getAllWords().pipe(
      tap(() => {
        this.isWordLoading = false; 
      }),
      finalize(() => {
        this.isWordLoading = false;
      }),
    ).subscribe((words: Word[]) => {
      this.trendingWords = words; 
    });  
  }

  ngOnInit(): void {
    this.setSkeletonWords()
    this.getTrendingWords();
  }
}
