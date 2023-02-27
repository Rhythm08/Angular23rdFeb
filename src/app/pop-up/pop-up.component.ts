import { Component,OnInit,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  value:any;
  project_array:any=[];
  constructor(private dialogRef: MatDialogRef<PopUpComponent>, private projectService: ProjectService,@Inject(MAT_DIALOG_DATA) 
  public data:any){}
    ngOnInit(): void {
      this.projectService.getProject().subscribe((data)=>{
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
