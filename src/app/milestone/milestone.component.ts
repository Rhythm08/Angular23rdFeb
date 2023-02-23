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
updateVal(updateValue:any,statusid:any){
  
  // console.log(this.milestoneArray);
  // console.log(updateValue+ "is value");
  let milesdata:any;
  for(let i of this.milestoneArray){
    if(i.id==updateValue){
      // console.log(i)
      i.status=statusid;
      milesdata = {...i};
      // console.log(milesdata)
      break;  
      
    }

  }
  this.milestone.updateStatus(updateValue,milesdata).subscribe(
    (data)=>{
      this.milestone.getMilestone().subscribe(
        (data)=>{
          this.milestoneArray=data;
        }
      );
      // console.log(data);
    }
  )
  
}
checkDisable(mileid:any,statusid:any){
  console.log(mileid, statusid)
    if(mileid==4){
      return [1,3].includes(statusid)
    }
    else if(mileid==2){
      return [1].includes(statusid)
    }
    else return false;
}




}
