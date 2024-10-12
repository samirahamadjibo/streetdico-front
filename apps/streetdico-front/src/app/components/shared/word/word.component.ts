/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../../../models/word';
import { WordService } from '../../../services/word/word.service';

@Component({
  selector: 'digitalvitae-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit{
  @Input() word: Word;
  @Input() isWordLoading: boolean;
  public tags: string[]
  public liked: boolean;
  public disliked: boolean;
  public reported: boolean;

  constructor(private wordService: WordService) {
    this.word = new Word()
    this.isWordLoading = true;
    this.tags = [];
    this.liked = false;
    this.disliked = false;
    this.reported = false;
  }

  ngOnInit(): void {
      this.setPublisherNames()
  }

  setPublisherNames(){
    this.tags = this.word.tags ? this.word.tags?.split(',') : [];

    if(!this.word.pseudo && this.word.publisher_id) {
        this.wordService.getPublisherName(this.word.publisher_id).subscribe((name: any) => {
          this.word.pseudo = name[0].pseudo;
        }); 
    }
  }

  report(doReport: boolean){
    this.reported = !this.reported
    this.wordService.report(doReport, this.word.id).subscribe(); 
  }

  like(doLike: boolean){
    this.liked = !this.liked
    this.wordService.like(doLike, this.word.id).subscribe((newCount: any) => {
      this.word.likes_count = newCount[0].likes_count;
    }); 
  }
 
  dislike(doDislike: boolean){
    this.disliked = !this.disliked;
    this.wordService.dislike(doDislike, this.word.id).subscribe((newCount: any) => {
      this.word.dislikes_count = newCount[0].dislikes_count;
    }); 
  }

}
