import { Component,OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UpThePopComponent } from '../up-the-pop/up-the-pop.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskservice:TaskService,private dialog:MatDialog) { }
  taskArray:any=[]
  taskStatusArray:any=[]
  ngOnInit(): void {
    this.taskservice.getTask().subscribe((data)=>{
      console.log(data);
      this.taskArray=data;
    })
    this.taskservice.gettaskStatus().subscribe((data)=>{
      console.log(data);
      this.taskStatusArray=data;

    })
    
  }
  getValue(projectId:any,statusId:any){
    return projectId==statusId;
  }
  updateVal(updateValue:any,statusid:any){
    let projectdata:any;

    if(statusid.value==5 || statusid.value==4){
      const dialogConfig =new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="20%";
      dialogConfig.data = { updateValue: updateValue };
      const dialogRef = this.dialog.open(UpThePopComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result && result.submit) {
          console.log("submit is there")
          for (const i of result.project_array) {
            if (i.id == updateValue) {
              console.log(i.id, "this is ID")
              i.status = statusid.value;
              projectdata = { ...i };
              console.log(projectdata, "this is project data")
              break;
            }
          }
          // console.log(result.project_array[updateValue].remarks, " Rhythm")
          // projectdata.remarks = result.project_array[updateValue].remarks;
          this.taskservice.updateStatus(updateValue, projectdata).subscribe(
            (data) => {
              this.taskservice.getTask().subscribe((data: any) => {
                this.taskArray = data;
                console.log(this.taskArray, " On changes")
              });
            }
          );
        } else {
          this.taskservice.getTask().subscribe((data)=>{
            console.log(data);
            this.taskArray=data;
          })
          
        }
      });
       
      return;

    }
    for(const i of this.taskArray){
      if(i.id==updateValue){
        i.status=statusid.value;
        i.remarks=''
        projectdata={...i};
        break;
      }
    }
    this.taskservice.updateStatus(updateValue,projectdata).subscribe(
      (data)=>{
        this.taskservice.getTask().subscribe(
          (data)=>{
            this.taskArray=data;
          }
        );
        console.log(data);
      }
    )
  }
  checkDisable(mileid:any,statusid:any){
    // console.log(mileid, statusid)
      if(mileid==4){
        
        return [1,3].includes(statusid) 
      }
      else if(mileid==2){
        return ([1].includes(statusid))
      }
      else if(mileid==9 || mileid==3){
        return !([2].includes(statusid))
      }
      
      else if((mileid==statusid)){
        return true;
      }
      else return false;
  }
  
}
