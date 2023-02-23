import { Component,OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskservice:TaskService) { }
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
    for(let i of this.taskArray){
      if(i.id==updateValue){
        i.status=statusid.value;
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
        return [1].includes(statusid)
      }
      else return false;
  }
  
}
