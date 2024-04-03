import { Component, OnInit } from '@angular/core';
import { WordService } from '../../../services/word/word.service';
import { Word } from '../../../models/word';

@Component({
  selector: 'digitalvitae-definition-form',
  templateUrl: './definition-form.component.html',
  styleUrls: ['./definition-form.component.scss'],
})

export class DefinitionFormComponent implements OnInit{
  constructor(private wordService: WordService){}
  
  definitionInProgress: Word | undefined

  ngOnInit(): void {
    this.getDefinitionInProgress()
  } 

  getDefinitionInProgress(): void{
    this.wordService.getDefinitionInProgress().subscribe((definition: any) => {
      this.definitionInProgress = definition; 
      console.log("from new page " + this.definitionInProgress?.name)
    });    
  }


}
