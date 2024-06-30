import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'digitalvitae-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.scss'],
})
export class AddWordFormComponent {

  onSubmit(addWordForm: NgForm) {
    console.log(addWordForm.value); // { first: '', last: '' }
    addWordForm.valid
  }
}
