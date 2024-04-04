import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word/word.service';
import { Word } from '../../models/word';

@Component({
  selector: 'digitalvitae-definition-form',
  templateUrl: './add-definition-form.component.html',
  styleUrls: ['./add-definition-form.component.scss'],
})

export class DefinitionFormComponent implements OnInit{
  constructor(private wordService: WordService){}
  
  definitionInProgress: Word | undefined

  ngOnInit(): void {
    this.getDefinitionInProgress()
  } 

  getDefinitionInProgress(): void{
    this.definitionInProgress = this.wordService.getDefinitionInProgress()
    console.log(this.definitionInProgress)
  }

}
