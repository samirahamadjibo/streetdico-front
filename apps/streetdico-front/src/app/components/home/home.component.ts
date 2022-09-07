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

  words: Word[] = [];

  getAllWords(): void{
    this.wordService.getWords().subscribe(words => this.words = words);;
  }

  ngOnInit(): void {
    this.getAllWords();
  }
}
