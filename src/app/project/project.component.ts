import { Component,OnInit} from '@angular/core';
import { ProjectService } from '../services/project.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  flag:number=0;
  prev_val:any;
  constructor(private projectService: ProjectService, private dialog:MatDialog) { }
  projectlist:any= []
  projectlistStatus:any=[]

  ngOnInit(): void {
    this.projectService.getProject().subscribe((data)=>{
      console.log(data);
      this.projectlist=data;
    })

    this.projectService.getProjectStatus().subscribe((data)=>{
      console.log(data);
      this.projectlistStatus=data;
    })
  }
  
  getValue(projectId:any,statusId:any){
      
    return projectId == statusId;
  }

  updateVal(updateValue:any,statusid:any){
     let prev_val=statusid.value;

    let projectdata:any;

    if(statusid.value==9 || statusid.value==4){
      const dialogConfig =new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="20%";
      const dialogRef = this.dialog.open(PopUpComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result === "submit") {
          console.log("submit is there")
          for (let i of this.projectlist) {
            if (i.id == updateValue) {
              i.status = statusid.value;
              projectdata = { ...i };
              break;
            }
          }
          this.projectService.updateStatus(updateValue, projectdata).subscribe(
            (data) => {
              this.projectlist = this.projectlist.map((project: any) => {
                if (project.id === updateValue) {
                  project.status = statusid.value;
                }
                return project;
              });
            
              console.log(data);
            }
          );
        } else {
          statusid.value = prev_val;
          console.log(prev_val+ "current value")
          this.flag=1;
        }
      });
       
      return;

    }

    console.log("Breakdown")
    for(let i of this.projectlist){
      if(i.id==updateValue){
        i.status=statusid.value;
        projectdata={...i};
        break;
      }
    }

    this.projectService.updateStatus(updateValue,projectdata).subscribe(
      (data)=>{
        this.projectlist = this.projectlist.map((project: any) => {
          if (project.id === updateValue) {
            project.status = statusid.value;
          }
          return project;
        });
        console.log(data);
      }
    )
  }

  checkDisable(mileid:any,statusid:any){
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