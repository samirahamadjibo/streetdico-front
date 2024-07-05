import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';



@Component({
  selector: 'digitalvitae-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.scss'],
})
export class AddWordFormComponent{
  constructor(public dialog: MatDialog){}


  addWordForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    definition: new FormControl('', [Validators.required, Validators.minLength(10)]),
    example: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(2)]),
    tags: new FormControl(''),
  });

  onSubmit() {
    if (this.addWordForm.valid){
      this.openDialog(this.addWordForm)
    }
  }


  openDialog(addWordForm: FormGroup): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: {name: addWordForm.value.pseudo}
    });

    dialogRef.afterClosed().subscribe(()=> {
      //addWordForm.resetForm()
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
