import { Component,OnInit,Inject,OnChanges, SimpleChanges } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-up-the-pop',
  templateUrl: './up-the-pop.component.html',
  styleUrls: ['./up-the-pop.component.css']
})
export class UpThePopComponent {
  value:any;
  project_array:any=[];
  constructor(private dialogRef: MatDialogRef<UpThePopComponent>, private taskService: TaskService,@Inject(MAT_DIALOG_DATA) 
  public data:any){}
    ngOnInit(): void {
      this.taskService.getTask().subscribe((data)=>{
        console.log(data);
        this.project_array=data;
      })
    }
    
   OnSubmit(){
   console.log(this.data.updateValue, "the val");
    for(let i of this.project_array){
      if(i.id==this.data.updateValue){
        i.remarks=this.value;
        console.log(i.remarks, " remarks");
        break;
      }
      console.log(i)

    }
    console.log(this.project_array[0].remarks, " sharma")
    
   this.dialogRef.close({'submit':true , project_array:  this.project_array});
    }
    OnCancel(){
      this.dialogRef.close('cancel');
    }
    
      
}
