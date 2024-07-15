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
  constructor(private wordService: WordService,  private router: Router) {
    this.definitionInProgress = {id: 0, name: "", definition: "", flags_count: 0, dislikes_count: 0, likes_count: 0, created_at: "", example:"", tags:"", publisher_id:0, pseudo:"anonyme"}
  }

  trendingWords: Word[] = [];
  definitionInProgress: Word

  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: any) => {
      this.trendingWords = words; 
      this.trendingWords.forEach((word: any, index) => {
          word.tags = word.tags.split(',')
          this.getPublisherName(word.publisher_id, index)
      });
      
    });    
  }

  getPublisherName(publisherId: number, index: number){
    this.wordService.getPublisherName(publisherId).subscribe((name: any) => {
        this.trendingWords[index].pseudo = name[0].pseudo;
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
