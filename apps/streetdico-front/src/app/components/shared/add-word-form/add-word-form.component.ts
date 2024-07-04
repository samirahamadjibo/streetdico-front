import { Component, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'digitalvitae-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.scss'],
})
export class AddWordFormComponent {
  constructor(public dialog: MatDialog){}

  onSubmit(addWordForm: NgForm) {
    console.log();
    
    if (addWordForm.valid && addWordForm.value.definition.length > 10 && addWordForm.value.example.length > 10){
      this.openDialog(addWordForm)
    }
  }

  openDialog(addWordForm: NgForm): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '750px',
      data: {name: addWordForm.value.pseudo}
    });

    dialogRef.afterClosed().subscribe(()=> {
      addWordForm.resetForm()
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
