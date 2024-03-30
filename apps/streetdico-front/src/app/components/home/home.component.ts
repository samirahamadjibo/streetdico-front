import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordService } from '../../services/word/word.service';

@Component({
  selector: 'digitalvitae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private wordService: WordService) {
    this.definitionInProgress = {id: 0, name: "", definition: "", flagsCount: 0, dislikesCount: 0, likesCount: 0, creationTimestamp: "", example:"", tags: []}
  }

  trendingWords: Word[] = [];
  publishers = ["samira", "piggysam", "poulet-payant", "rafaella", "tourniquet", "etoile-de-mer", "routine", "coupe-carree", "alias", "piggysam", "poulet-payant", "rafaella", "tourniquet", "etoile-de-mer", "routine", "coupe-carree", "alias"]


  definitionInProgress: Word
  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: any) => {
      this.trendingWords = words; 
      this.trendingWords.forEach((word: any) => {
          word.tags = word.tags.split(', ')
      });
    });    
  }

  setDefinitionInProgress(): void{
    this.wordService.setDefinitionInProgress(this.definitionInProgress);   
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
