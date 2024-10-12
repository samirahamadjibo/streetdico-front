import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word/word.service';
import { Word } from '../../models/word';
import { finalize } from 'rxjs';

@Component({
  selector: 'digitalvitae-show-all-words',
  templateUrl: './show-all-words.component.html',
  styleUrls: ['./show-all-words.component.scss'],
})
export class ShowAllWordsComponent implements OnInit {
  constructor(private wordService: WordService) {
    this.pageWords = [];
    this.pageNumber = 0;
    this.itemsPerPage = 10;
    this.noNext = false;
  }

  public pageWords: Word[];
  public pageNumber: number;
  public itemsPerPage: number;
  public noNext: boolean;
  public isWordLoading = true;


  ngOnInit(): void {
    this.getActiveWords();
  }

  setPageNumber(pageNumber: number){
    this.pageNumber = pageNumber;
  }

  getActiveWords(){
    this.wordService.getPageWords(this.pageNumber, this.itemsPerPage).pipe(
      finalize(() => {
        this.isWordLoading = true;
      })
    ).subscribe((words: Word[]) => {
      window.scrollTo(0, 0);
      this.pageWords = words;
      if (this.pageWords.length < this.itemsPerPage ){
        this.noNext = true
      }

      this.isWordLoading = false;
    });
  }


  previousPage(){
    if(this.pageNumber > 0){
      this.pageNumber = this.pageNumber - 1;
      this.noNext = false;
      
      this.getActiveWords()
    }
  }

  nextPage(){
      this.pageNumber = this.pageNumber +1;
      this.getActiveWords()
  }
}
