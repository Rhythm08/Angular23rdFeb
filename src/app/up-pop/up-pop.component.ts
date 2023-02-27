import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MilestoneService } from '../services/milestone.service';
@Component({
  selector: 'app-up-pop',
  templateUrl: './up-pop.component.html',
  styleUrls: ['./up-pop.component.css']
})
export class UpPopComponent implements OnInit {
  value:any;
  project_array:any=[];
  constructor(private dialogRef: MatDialogRef<UpPopComponent>, private mileService: MilestoneService,@Inject(MAT_DIALOG_DATA) 
  public data:any){}
    ngOnInit(): void {
      this.mileService.getMilestone().subscribe((data)=>{
        console.log(data);
        this.project_array=data;
      })
    }
    
   OnSubmit(){
   console.log(this.data.updateValue, "the val");
    for(const i of this.project_array){
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
