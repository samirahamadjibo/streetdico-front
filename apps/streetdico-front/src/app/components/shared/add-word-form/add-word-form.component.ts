/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { WordService } from '../../../services/word/word.service';




@Component({
  selector: 'digitalvitae-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.scss'],
})
export class AddWordFormComponent{
  constructor(public dialog: MatDialog, private wordService: WordService){}


  addWordForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    definition: new FormControl('', [Validators.required, Validators.minLength(10)]),
    example: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(2)]),
    tags: new FormControl(''), 
  });

  onSubmit() {
    // pk ne pas envoyer directement la valeur du formulaire
    const newWord: any = {
      name: this.addWordForm.value.name,
      definition: this.addWordForm.value.definition,
      example: this.addWordForm.value.example,
      pseudo: this.addWordForm.value.pseudo,
      tags: this.addWordForm.value.tags
    }

    if (this.addWordForm.valid){
      this.wordService.postNewWord(newWord).subscribe(); 
      this.openDialog(this.addWordForm)      
    }
  }

  openDialog(addWordForm: FormGroup): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {name: addWordForm.value.pseudo}
    });

    dialogRef.afterClosed().subscribe(()=> {
      this.addWordForm.reset()
    });
  }
}


@Component({
  selector: 'digitalvitae-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent{
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
