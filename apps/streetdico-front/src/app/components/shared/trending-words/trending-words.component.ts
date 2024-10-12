import { Component, OnInit } from '@angular/core';
import { Word } from '../../../models/word';
import { WordService } from '../../../services/word/word.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'digitalvitae-trending-words',
  templateUrl: './trending-words.component.html',
  styleUrls: ['./trending-words.component.scss'],
})
export class TrendingWordsComponent implements OnInit {
  constructor(private wordService: WordService,  private router: Router) {  }

  trendingWords: Word[] = [];
  isWordLoading = true;

  getTrendingWords(): void{
    this.wordService.getAllWords().pipe(
      finalize(() => {
        this.isWordLoading = true;
      })
    ).subscribe((words: Word[]) => {
      this.trendingWords = words; 
    });  
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
