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
  taskStausArray:any=[]
  ngOnInit(): void {
    this.taskservice.getTask().subscribe((data)=>{
      console.log(data);
      this.taskArray=data;
    })
    this.taskservice.gettaskStatus().subscribe((data)=>{
      console.log(data);
      this.taskStausArray=data;

    })
    
  }
  
}
