import { Component, Inject} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

export class LongErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const isValue = control?.value
    
    return !!( isSubmitted && !isValue) || ((isSubmitted && isValue) && control.value.length<10);
  }
}

export class ShortErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const isValue = control?.value
    
    return !!( isSubmitted && !isValue) || ((isSubmitted && isValue) && control.value.length<2);
  }
}

@Component({
  selector: 'digitalvitae-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.scss'],
})
export class AddWordFormComponent {
  constructor(public dialog: MatDialog){}

  longMatcher = new LongErrorStateMatcher();
  shortMatcher = new ShortErrorStateMatcher();

  onSubmit(addWordForm: NgForm) {
    if (addWordForm.valid){
      this.openDialog(addWordForm)
    }
  }

  openDialog(addWordForm: NgForm): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
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
