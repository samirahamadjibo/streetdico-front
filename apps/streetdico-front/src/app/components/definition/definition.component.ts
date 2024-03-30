import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordService } from '../../services/word/word.service';



@Component({
  selector: 'digitalvitae-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
})
export class DefinitionComponent implements OnInit {

  constructor(private wordService: WordService){}
  
  definitionInProgress: Word | undefined

  ngOnInit(): void {
    return 
  }

  getDefinitionInProgress(): void{
    this.wordService.getDefinitionInProgress().subscribe((definition: any) => {
      this.definitionInProgress = definition; 
    });    
  }
 
}
