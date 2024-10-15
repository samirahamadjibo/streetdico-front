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
    if (this.liked) this.word.likes_count = this.word.likes_count == null ? 1 : this.word.likes_count + 1;
    if (!this.liked) this.word.likes_count = this.word.likes_count == null ? 1 : this.word.likes_count - 1;
    this.wordService.like(doLike, this.word.id).subscribe(); 
  }
 
  dislike(doDislike: boolean){
    this.disliked = !this.disliked;
    if (this.disliked) this.word.dislikes_count = this.word.dislikes_count == null ? 0 : this.word.dislikes_count + 1;
    if (!this.disliked) this.word.dislikes_count = this.word.dislikes_count == null ? 0 : this.word.dislikes_count - 1;
    this.wordService.dislike(doDislike, this.word.id).subscribe(); 
  }

}
