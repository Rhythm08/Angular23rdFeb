import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UpPopComponent } from '../up-pop/up-pop.component';
import {MilestoneService} from '../services/milestone.service';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
   constructor(private milestone:MilestoneService,private dialog:MatDialog) { }
  milestoneArray:any=[]
  milestoneStatus:any=[]
  ngOnInit(): void {
    this.milestone.getMilestone().subscribe((data)=>{
      // console.log(data);
      this.milestoneArray=data;
    })
    this.milestone.getStatus().subscribe((data)=>{
      console.log(data);
      this.milestoneStatus=data;
    })
}
getValue(milesId:any,statusId:any){

   return milesId==statusId
}
updateVal(updateValue:any,statusid:any){
  let milesdata:any;
  
  if(statusid.value==5 || statusid.value==4){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%";
    dialogConfig.data = { updateValue: updateValue };
    const dialogRef = this.dialog.open(UpPopComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.submit) {
        console.log("submit is there")
        for (let i of result.project_array) {
          if (i.id == updateValue) {
            console.log(i.id, "this is ID")
            i.status = statusid.value;
            milesdata = { ...i };
            console.log(milesdata, "this is project data")
            break;
          }
        }
        // console.log(result.project_array[updateValue].remarks, " Rhythm")
        // projectdata.remarks = result.project_array[updateValue].remarks;
        this.milestone.updateStatus(updateValue, milesdata).subscribe(
          (data) => {
            this.milestone.getMilestone().subscribe((data: any) => {
              this.milestoneArray = data;
              console.log(this.milestoneArray, " On changes")
            });
          }
        );
      } else {
        this.milestone.getMilestone().subscribe((data)=>{
          console.log(data);
          this.milestoneArray=data;
        })
        
      }
    });
     
    return;

  }
 
  for(let i of this.milestoneArray){
    if(i.id==updateValue){
      console.log(i)
      i.status=statusid.value;
      i.remarks=''  
      milesdata = {...i};
      console.log(milesdata)
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
      console.log(data);
    }
  )
  
}
checkDisable(mileid:any,statusid:any){
  // console.log(mileid, statusid)
    if(mileid==4){  //onhold
      
      return [1,3].includes(statusid) 
    }
    else if(mileid==2){  //Inprogress
      return ([1].includes(statusid))
    }
    else if(mileid==5 || mileid==3){
      return !([2].includes(statusid))
    }
    
    else if((mileid==statusid)){
      return true;
    }
    else return false;
}




}
