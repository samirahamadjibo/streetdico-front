import { Component } from '@angular/core';
import { WordService } from '../../../services/word/word.service';
import { Word } from '../../../models/word';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActiveWordsService } from '../../../services/active-words/active-words.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'digitalvitae-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{
  constructor(private wordService: WordService, private activeWordService: ActiveWordsService, private router: Router) {
    this.searchResults = []
  }

  public searchResults: Word[];

  searchWordForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  

  onSubmit() {
    if (this.searchWordForm.valid && this.searchWordForm.value.name){ 
      this.wordService.getWordFromName(this.searchWordForm.value.name).subscribe((results: Word[]) => {
        this.searchResults = results;
        this.activeWordService.setActiveWords(this.searchResults);
        this.router.navigate(['/word-details']);
      });
    }
    else {
      this.searchWordForm.markAsTouched()
    }
  }

}
