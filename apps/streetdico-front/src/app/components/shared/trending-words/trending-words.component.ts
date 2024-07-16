import { Component, OnInit } from '@angular/core';
import { Word } from '../../../models/word';
import { WordService } from '../../../services/word/word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'digitalvitae-trending-words',
  templateUrl: './trending-words.component.html',
  styleUrls: ['./trending-words.component.scss'],
})
export class TrendingWordsComponent implements OnInit {
  constructor(private wordService: WordService,  private router: Router) {  }

  trendingWords: Word[] = [];

  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: any) => {
      this.trendingWords = words; 
    });    
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
