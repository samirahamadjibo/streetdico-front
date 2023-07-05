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

  getTrendingWords(): void{
    this.wordService.getAllWords().subscribe((words: Word[]) => {this.trendingWords = words});;
  }

  ngOnInit(): void {
    this.getTrendingWords();
  }
}
