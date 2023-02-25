import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  value:any;
  constructor(private dialogRef: MatDialogRef<PopUpComponent>){}
   OnSubmit(){
   console.log(this.value);

      this.dialogRef.close('submit');
    }
    OnCancel(){
      this.dialogRef.close('cancel');
    }

}
