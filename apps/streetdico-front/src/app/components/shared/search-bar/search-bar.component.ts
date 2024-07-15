import { Component } from '@angular/core';
import { WordService } from '../../../services/word/word.service';
import { Word } from '../../../models/word';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'digitalvitae-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{
  constructor(private wordService: WordService) {
    this.searchResults = []
  }

  public searchResults: Word[];

  searchWordForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  
  getWordFromName(name: string){
    this.wordService.getWordFromName(name).subscribe((results: Word[]) => {
        this.searchResults = results;
        console.log(this.searchResults);
    }); 
  }

  onSubmit() {
    if (this.searchWordForm.valid && this.searchWordForm.value.name){ 
      this.getWordFromName(this.searchWordForm.value.name)
    }
  }

}
