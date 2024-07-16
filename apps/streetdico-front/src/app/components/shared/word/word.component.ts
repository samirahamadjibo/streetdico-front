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
  public tags: string[]

  constructor(private wordService: WordService) {
    this.word = {id: 0, name: "", definition: "", flags_count: 0, dislikes_count: 0, likes_count: 0, created_at: "", example:"", tags:"", publisher_id:0, pseudo:"anonyme"}
    this.tags = []
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

}
