import { Component, OnInit } from '@angular/core';

import { Word } from '../../models/word';
import { WordService } from '../../services/word/word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'digitalvitae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private wordService: WordService,  private router: Router) {
    this.definitionInProgress = {id: 0, name: "", definition: "", flagsCount: 0, dislikesCount: 0, likesCount: 0, creationTimestamp: "", example:"", tags: []}
  }

  trendingWords: Word[] = [];
  definitionInProgress: Word

  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: any) => {
      this.trendingWords = words; 
      this.trendingWords.forEach((word: any) => {
          word.tags = word.tags.split(', ')
      });
    });    
  }

  onSubmit() { 
    this.wordService.setDefinitionInProgress(this.definitionInProgress);   
    this.router.navigate(['/rajouter-une-definition']);
    console.log(this.definitionInProgress.name + " " + this.definitionInProgress.definition)
  }

 
  ngOnInit(): void {
    this.getTrendingWords();
  }
}
