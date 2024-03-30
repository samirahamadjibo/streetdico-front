import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordService } from '../../services/word/word.service';

@Component({
  selector: 'digitalvitae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private wordService: WordService) {}

  trendingWords: Word[] = [];
  publishersRow1 = ["samira", "piggysam", "poulet-payant", "rafaella", "tourniquet", "etoile-de-mer", "routine", "coupe-carree", "alias"]
  publishersRow2 = ["piggysam", "poulet-payant", "rafaella", "tourniquet", "etoile-de-mer", "routine", "coupe-carree", "alias"]

  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: any) => {
      this.trendingWords = words; 
      this.trendingWords.forEach((word: any) => {
          word.tags = word.tags.split(', ')
      });
    });    
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
