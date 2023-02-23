import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MilestoneService} from '../services/milestone.service';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
   constructor(private milestone:MilestoneService) { }
  milestoneArray:any=[]
  milestoneStatus:any=[]
  ngOnInit(): void {
    this.milestone.getMilestone().subscribe((data)=>{
      // console.log(data);
      this.milestoneArray=data;
    })
    this.milestone.getStatus().subscribe((data)=>{
      // console.log(data);
      this.milestoneStatus=data;
    })
}
getValue(milesId:any,statusId:any){
  
   return milesId==statusId
}


}
